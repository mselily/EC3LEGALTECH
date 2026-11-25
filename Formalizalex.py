import json
from pathlib import Path

# FormalizaLex: Tu Abogado en Regla - Logica base (Vista unica Productor / Mype)
# Incluye semaforo, proyeccion de escenarios de retraso (7, 15, 30 dias),
# porcentaje de avance por requisitos y suscripcion.

CONFIG_COLORES_PLATAFORMA = {
    "encabezado_fondo": "#0f172a",
    "acento_principal": "#1d4ed8",
    "acento_secundario": "#0f766e",
    "fondo_pagina": "#f4f6f9",
}

RUTA_BASE_NORMATIVA = Path(__file__).resolve().parent / "base-normativa.json"

REQUISITOS_RESPALDO = {
    "Pesca artesanal": [
        {
            "id": "PA-1",
            "nombre": "Permiso de pesca de la embarcacion",
            "critico": True,
            "glosario": "Comprueba que tienes el permiso correspondiente antes de salir a pescar. La matricula no sustituye al permiso.",
        },
        {
            "id": "PA-2",
            "nombre": "Respeto de vedas, tallas y zonas autorizadas",
            "critico": True,
            "glosario": "Revisa las restricciones de la especie y zona antes de cada faena.",
        },
        {
            "id": "PA-3",
            "nombre": "Manipulacion sanitaria de la captura a bordo",
            "critico": True,
            "glosario": "Evita contaminar o danar el pescado durante su manipulacion.",
        },
    ],
    "Agroindustria": [
        {
            "id": "AG-1",
            "nombre": "Registro sanitario del producto industrializado",
            "critico": True,
            "glosario": "Comprueba que el alimento industrializado sujeto a registro cuenta con el tramite correspondiente antes de venderlo.",
        },
        {
            "id": "AG-2",
            "nombre": "Programa de limpieza y desinfeccion",
            "critico": True,
            "glosario": "Organiza y ejecuta la limpieza del local para evitar contaminar los alimentos.",
        },
        {
            "id": "AG-3",
            "nombre": "Agua apta para elaborar alimentos",
            "critico": True,
            "glosario": "Usa agua que cumpla los requisitos sanitarios aplicables al consumo humano.",
        },
    ],
    "Manufactura": [
        {
            "id": "MF-1",
            "nombre": "Licencia municipal de funcionamiento e ITSE",
            "critico": True,
            "glosario": "Antes de abrir el taller o planta, verifica la licencia municipal y las condiciones de seguridad del establecimiento.",
        },
        {
            "id": "MF-2",
            "nombre": "Instrumento de Gestion Ambiental correspondiente",
            "critico": True,
            "glosario": "Identifica que instrumento ambiental corresponde a tu actividad y cumple sus compromisos.",
        },
        {
            "id": "MF-3",
            "nombre": "Evaluacion de riesgos laborales y equipos de proteccion",
            "critico": True,
            "glosario": "Identifica los peligros de maquinas, herramientas, sustancias y procesos y entrega los EPP correspondientes.",
        },
        {
            "id": "MF-4",
            "nombre": "Manejo de residuos solidos no municipales y reportes SIGERSOL",
            "critico": True,
            "glosario": "Separa, almacena y entrega los residuos industriales de forma adecuada.",
        },
    ],
    "Mineria en formalizacion": [
        {
            "id": "MN-1",
            "nombre": "Inscripcion vigente en REINFO y RUC activo",
            "critico": True,
            "glosario": "Verifica que tu inscripcion en el REINFO figure vigente y que tu RUC este activo.",
        },
        {
            "id": "MN-2",
            "nombre": "IGAFOM correctivo y preventivo",
            "critico": True,
            "glosario": "Describe las medidas para corregir y prevenir impactos de la actividad minera.",
        },
        {
            "id": "MN-3",
            "nombre": "Acreditacion de concesion minera y uso del terreno superficial",
            "critico": True,
            "glosario": "Acredita tanto el derecho sobre la concesion como el uso del terreno superficial.",
        },
    ],
    "Otro rubro productivo": [
        {
            "id": "OT-1",
            "nombre": "Identificacion formal del negocio y permisos base",
            "critico": True,
            "glosario": "La base para operar con respaldo y acceder a mejores clientes.",
        },
        {
            "id": "OT-2",
            "nombre": "Calendario de fechas y pagos clave",
            "critico": False,
            "glosario": "Evita recargos o multas por olvidar una fecha.",
        },
        {
            "id": "OT-3",
            "nombre": "Respaldo de comprobantes y cargos",
            "critico": False,
            "glosario": "Guardar constancias te sirve como prueba si hay una revision.",
        },
    ],
}


def cargar_requisitos_por_rubro(ruta_json=RUTA_BASE_NORMATIVA):
  try:
    with open(ruta_json, encoding="utf-8") as archivo:
      datos = json.load(archivo)
    combinado = dict(REQUISITOS_RESPALDO)
    combinado.update(datos)
    combinado["Otro rubro productivo"] = REQUISITOS_RESPALDO["Otro rubro productivo"]
    return combinado
  except (OSError, json.JSONDecodeError):
    return dict(REQUISITOS_RESPALDO)


REQUISITOS_POR_RUBRO = cargar_requisitos_por_rubro()


def evaluar_cumplimiento_productor(dias_restantes, estado_requisito, criticos_pendientes):
  if estado_requisito == "no" or dias_restantes < 0 or criticos_pendientes >= 2:
    return "ROJO: Riesgo alto — Hay plazos vencidos, vacios criticos o desconocimiento importante."
  elif estado_requisito == "parcial" or dias_restantes <= 10 or criticos_pendientes == 1:
    return "AMARILLO: Preventivo — Revisa fechas cercanas y cierra pendientes clave a tiempo."
  else:
    return "VERDE: En regla — Vas bien encaminado; mantente con alertas preventivas."


def proyectar_escenarios_retraso(monto_por_dia, presupuesto_base):
  escenarios = {}
  for dias in (7, 15, 30):
    costo = monto_por_dia * dias
    escenarios[dias] = {
        "costo_retraso": costo,
        "diferencia_vs_presupuesto": costo - presupuesto_base,
    }
  return escenarios


def calcular_avance_requisitos(estados_requisitos):
  estados_aplicables = [estado for estado in estados_requisitos if estado != "no_aplica"]
  if not estados_aplicables:
    return 0
  al_dia = sum(1 for estado in estados_aplicables if estado == "al_dia")
  return round((al_dia / len(estados_aplicables)) * 100)


def calcular_suscripcion(tipo_plan, meses):
  meses_seguros = meses if meses > 0 else 1
  if tipo_plan == "anual":
    return 800
  return 80 * meses_seguros


# --- PRUEBA RAPIDA EN CONSOLA ---
if __name__ == "__main__":
  print("=== 1. SEMAFORO PRODUCTOR / MYPE ===")
  print(evaluar_cumplimiento_productor(7, "parcial", 1))

  print("\n=== 2. ESCENARIOS DE RETRASO (7, 15, 30 DIAS) VS PRESUPUESTO S/ 450 ===")
  for dias, datos in proyectar_escenarios_retraso(25, 450).items():
    print(
        f"A los {dias} dias -> Costo retraso: S/ {datos['costo_retraso']} | "
        f"Diferencia vs presupuesto: S/ {datos['diferencia_vs_presupuesto']}"
    )

  print("\n=== 3. AVANCE DE REQUISITOS (EJ. 1 DE 3 AL DIA) ===")
  print("Porcentaje al dia:", calcular_avance_requisitos(["al_dia", "en_tramite", "pendiente"]), "%")

  print("\n=== 4. SUSCRIPCION MYPE ===")
  print("Mensual (3 meses): S/", calcular_suscripcion("mensual", 3))
  print("Anual: S/", calcular_suscripcion("anual", 12))
  print("\nRubros cargados:", list(REQUISITOS_POR_RUBRO.keys()))