// ==========================================
// 1. REQUISITOS POR RUBRO Y SEMAFORO MYPE
// ==========================================
const REQUISITOS_RESPALDO = {
  "Pesca artesanal": [
     {
      "id": "PA-1",
      "nombre": "Permiso de pesca de la embarcación",
      "critico": true,
      "glosario": "Comprueba que tienes el permiso correspondiente antes de salir a pescar. La matrícula no sustituye al permiso.",
      "baseLegal": "Decreto Ley 25977, art. 43 literal c), art. 76 numeral 1",
      "entidad": "Gobierno regional (DIREPRO o equivalente); fiscalización pesquera según competencia de GORE/PRODUCE",
      "aplicabilidad": "Titular de embarcación artesanal de bandera nacional dedicada a extracción.",
      "plazo": "Antes de operar; verificar condiciones y vigencia del permiso.",
      "fuente": "https://diariooficial.elperuano.pe/Normas/obtenerDocumento?idNorma=51"
    },
    {
      "id": "PA-2",
      "nombre": "Respeto de vedas, tallas y zonas autorizadas",
      "critico": true,
      "glosario": "Revisa las restricciones de la especie y zona antes de cada faena.",
      "baseLegal": "Decreto Ley 25977, art. 76 numerales 2 y 3",
      "entidad": "PRODUCE y gobiernos regionales, según competencia",
      "aplicabilidad": "Extracción de recursos hidrobiológicos; las restricciones varían según especie y zona.",
      "plazo": "En cada faena; consultar las disposiciones específicas vigentes.",
      "fuente": "https://diariooficial.elperuano.pe/Normas/obtenerDocumento?idNorma=51"
    },
    {
      "id": "PA-3",
      "nombre": "Manipulación sanitaria de la captura a bordo",
      "critico": true,
      "glosario": "Evita contaminar o dañar el pescado durante su manipulación.",
      "baseLegal": "D.S. 020-2022-PRODUCE, art. 25.1; el numeral 1 fue modificado por D.S. 005-2025-PRODUCE.",
      "entidad": "SANIPES",
      "aplicabilidad": "Embarcaciones pesqueras comerciales, incluida la pesca artesanal embarcada.",
      "plazo": "Durante cada faena.",
      "fuente": "https://www.sanipes.gob.pe/documentos_sanipes/ds/2023/DS%20N020-2022-PRODUCE.pdf"
    }
  ],
  "Agroindustria": [
    {
      "id": "AG-1",
      "nombre": "Registro sanitario del producto industrializado",
      "critico": true,
      "glosario": "Comprueba que el alimento industrializado sujeto a registro cuenta con el trámite correspondiente antes de venderlo.",
      "baseLegal": "D.S. 007-98-SA, arts. 101 y 102",
      "entidad": "DIGESA (MINSA)",
      "aplicabilidad": "Alimentos y bebidas industrializados de consumo humano sujetos a registro y comercializados en Perú. No incluye automáticamente el procesamiento primario.",
      "plazo": "Antes de comercializar; verificar vigencia y condiciones del registro.",
      "fuente": "https://www.digesa.minsa.gob.pe/normaslegales/normas/ds007_98.pdf"
    },
    {
      "id": "AG-2",
      "nombre": "Programa de limpieza y desinfección",
      "critico": true,
      "glosario": "Organiza y ejecuta la limpieza del local para evitar contaminar los alimentos.",
      "baseLegal": "D.S. 007-98-SA, art. 56",
      "entidad": "Autoridad sanitaria competente (DIGESA o autoridad regional, según competencia)",
      "aplicabilidad": "Fábricas de alimentos y bebidas del perfil industrializado seleccionado.",
      "plazo": "Al finalizar la jornada y cuando sea necesario.",
      "fuente": "https://www.digesa.minsa.gob.pe/normaslegales/normas/ds007_98.pdf"
    },
    {
      "id": "AG-3",
      "nombre": "Agua apta para elaborar alimentos",
      "critico": true,
      "glosario": "Usa agua que cumpla los requisitos sanitarios aplicables al consumo humano.",
      "baseLegal": "D.S. 007-98-SA, art. 40",
      "entidad": "Autoridad sanitaria competente (DIGESA o autoridad regional, según competencia)",
      "aplicabilidad": "Fabricación de alimentos y bebidas del perfil seleccionado que utiliza agua en sus procesos o en operaciones de higiene.",
      "plazo": "Durante la fabricación y según el programa de control sanitario.",
      "fuente": "https://www.digesa.minsa.gob.pe/normaslegales/normas/ds007_98.pdf"
    }
  ],
  "Manufactura": [
    {
      "id": "MF-1",
      "nombre": "Licencia municipal de funcionamiento e ITSE",
      "critico": true,
      "glosario": "Antes de abrir el taller o planta, verifica la licencia municipal y las condiciones de seguridad del establecimiento. La inspección de seguridad puede ser previa o posterior según el nivel de riesgo.",
      "baseLegal": "TUO de la Ley 28976, aprobado por D.S. 163-2020-PCM, arts. 3, 4, 5, 6 y 8; D.S. 002-2018-PCM, arts. 31, 33 y 34",
      "entidad": "Municipalidad distrital o provincial competente",
      "aplicabilidad": "Personas naturales o jurídicas que desarrollan actividad industrial en un establecimiento permanente; la municipalidad evalúa zonificación, compatibilidad de uso y seguridad.",
      "plazo": "Antes de abrir el establecimiento. ITSE previa para riesgo alto o muy alto; posterior para riesgo bajo o medio, conforme a la clasificación municipal.",
      "fuente": "https://busquedas.elperuano.pe/dispositivo/NL/1890266-2"
    },
    {
      "id": "MF-2",
      "nombre": "Instrumento de Gestión Ambiental correspondiente",
      "critico": true,
      "glosario": "Identifica qué instrumento ambiental corresponde a tu actividad y cumple sus compromisos. No todas las fábricas necesitan el mismo instrumento: depende de la actividad, categoría e impactos.",
      "baseLegal": "D.S. 017-2015-PRODUCE, arts. 16 y 19, modificado por D.S. 006-2019-PRODUCE; D.S. 020-2025-PRODUCE, arts. 1, 2.1 y 2.5; Ley 27446, art. 3",
      "entidad": "PRODUCE (Dirección General de Asuntos Ambientales de Industria) o gobierno regional con funciones transferidas; fiscalización por OEFA/EFA según competencia",
      "aplicabilidad": "Proyectos manufactureros sujetos al SEIA y actividades en curso comprendidas en el reglamento sectorial. La DAA o el PAMA por adecuación excepcional del D.S. 020-2025-PRODUCE solo alcanza a actividades que iniciaron hasta el 27/06/2019 sin IGA aprobado y cumplen las condiciones normativas.",
      "plazo": "El instrumento preventivo debe obtenerse antes de iniciar el proyecto sujeto al SEIA. Para los supuestos excepcionales del D.S. 020-2025-PRODUCE, el plazo máximo para presentar DAA o PAMA es de cinco años desde la entrada en vigor de esa norma.",
      "fuente": "https://busquedas.elperuano.pe/dispositivo/NL/2445312-1"
    },
    {
      "id": "MF-3",
      "nombre": "Evaluación de riesgos laborales y equipos de protección",
      "critico": true,
      "glosario": "Identifica los peligros de máquinas, herramientas, sustancias y procesos; actualiza la evaluación de riesgos y entrega gratuitamente los equipos de protección adecuados cuando correspondan.",
      "baseLegal": "Ley 29783, arts. 49, 57 y 60 (arts. 49 y 60 modificados por Ley 31246); D.S. 005-2012-TR",
      "entidad": "SUNAFIL y autoridad de trabajo competente",
      "aplicabilidad": "Empleadores manufactureros con trabajadores; deben prevenir riesgos según las tareas y condiciones reales del centro de trabajo.",
      "plazo": "La evaluación de riesgos se actualiza como mínimo una vez al año, cuando cambian las condiciones de trabajo o cuando se producen daños a la salud o seguridad; los EPP se proporcionan cuando el riesgo no puede eliminarse en su origen.",
      "fuente": "https://www.dirislimaeste.gob.pe/Virtual2/Otros_Link/CSST/Ley%2029783%20Seguridad%20y%20Salud%20en%20el%20Trabajo.pdf"
    },
    {
      "id": "MF-4",
      "nombre": "Manejo de residuos sólidos no municipales y reportes SIGERSOL",
      "critico": true,
      "glosario": "Separa, almacena y entrega los residuos industriales de forma adecuada. Si tu actividad está obligada a contar con IGA, verifica además los reportes que correspondan en SIGERSOL.",
      "baseLegal": "D. Leg. 1278, art. 55; D.S. 014-2017-MINAM, arts. 13 y 48; R.M. 000279-2025-PRODUCE, arts. 1 y 3-1.4",
      "entidad": "MINAM (administración de SIGERSOL); PRODUCE/DGAAMI para las reglas sectoriales; OEFA o EFA competente para fiscalización, según corresponda",
      "aplicabilidad": "Generadores de residuos sólidos no municipales. Si cuentan con IGA, revisar la obligación de reporte conforme al D.S. 014-2017-MINAM. Si no están obligados a IGA, la R.M. 000279-2025-PRODUCE (vigente desde 01/01/2026) exige DAMRS/MMRSP solo a las actividades manufactureras CIIU enumeradas y cuando se cumplan las condiciones y umbrales específicos de su cuadro (por ejemplo, cantidades de residuos o material de descarte). Quienes no estén comprendidos igualmente deben cumplir las demás obligaciones de manejo de residuos.",
      "plazo": "Cuando corresponda: DAMRS durante los primeros quince días hábiles de abril de cada año; manifiestos de residuos peligrosos durante los primeros quince días hábiles del inicio de cada trimestre. La gestión de residuos debe mantenerse de forma continua.",
      "fuente": "https://busquedas.elperuano.pe/dispositivo/NL/2430741-1"
    }
  ],
  "Minería en formalización": [
    {
      "id": "MN-1",
      "nombre": "Inscripción vigente en REINFO y RUC activo",
      "critico": true,
      "glosario": "Verifica que tu inscripción en el REINFO figure vigente y que tu RUC esté activo, en renta de tercera categoría y con actividad económica minera. Estar inscrito no equivale a tener autorización de inicio o reinicio.",
      "baseLegal": "D.S. 001-2020-EM, art. 7.2 literal a), modificado por D.S. 010-2022-EM; Ley 32537, art. único (modifica art. 6 del D. Leg. 1293)",
      "entidad": "MINEM - Dirección General de Formalización Minera (REINFO); SUNAT (RUC)",
      "aplicabilidad": "Solo para operadores inscritos en el REINFO dentro del proceso de formalización minera integral. La Ley 32537 también exige verificar el cumplimiento del sinceramiento georreferenciado de ubicación presentado por los inscritos.",
      "plazo": "Mantener las condiciones durante la vigencia del proceso. La Ley 32537 fija vigencia hasta el 31/12/2026 o hasta la entrada en vigor de la Ley MAPE y su reglamento, lo que ocurra primero. Además, exigió el sinceramiento georreferenciado de ubicación dentro de 120 días desde su entrada en vigor; verificar el cargo porque ese plazo único ya transcurrió.",
      "fuente": "https://busquedas.elperuano.pe/dispositivo/NL/2471915-1"
    },
    {
      "id": "MN-2",
      "nombre": "IGAFOM correctivo y preventivo",
      "critico": true,
      "glosario": "El IGAFOM describe las medidas para corregir impactos existentes y prevenir impactos de la actividad minera. Debes revisar que corresponda a cada actividad inscrita y conocer su estado de evaluación.",
      "baseLegal": "D. Leg. 1336, art. 6; D.S. 038-2017-EM, arts. 4, 9 y 10; D.S. 001-2020-EM, art. 7.2 literal b), modificado por D.S. 010-2022-EM; D.S. 009-2025-EM, arts. 9.5 y disposición complementaria modificatoria primera",
      "entidad": "MINEM - Dirección General de Asuntos Ambientales Mineros (evalúa y aprueba); gobiernos regionales y Dirección General de Minería en Lima Metropolitana (fiscalización ambiental, según competencia)",
      "aplicabilidad": "Minero informal inscrito en REINFO, respecto de cada actividad minera inscrita. El IGAFOM es un requisito del proceso de formalización y su aprobación es necesaria para culminarlo.",
      "plazo": "Presentar los aspectos correctivo y preventivo y atender las observaciones. Si hay desistimiento, abandono o desaprobación, revisar el plazo de treinta días calendario para una nueva presentación previsto en el art. 7.2 literal b), según corresponda.",
      "fuente": "https://busquedas.elperuano.pe/dispositivo/NL/2400459-1"
    },
    {
      "id": "MN-3",
      "nombre": "Acreditación de concesión minera y uso del terreno superficial",
      "critico": true,
      "glosario": "Debes acreditar el derecho sobre la concesión minera y, por separado, la propiedad o autorización para usar el terreno superficial. Una concesión minera no reemplaza el derecho de uso de la superficie.",
      "baseLegal": "D. Leg. 1336, art. 3; D.S. 018-2017-EM, arts. 18 y 20",
      "entidad": "MINEM - Dirección General de Formalización Minera; SUNARP para verificar partidas registrales; titular del predio o de la concesión, según corresponda",
      "aplicabilidad": "Operadores inscritos en el proceso que deben acreditar titularidad de la concesión o contrato de cesión/explotación y propiedad o autorización de uso del terreno superficial.",
      "plazo": "Antes de solicitar la autorización de inicio o reinicio; los contratos y derechos deben estar vigentes y acreditados conforme a la norma.",
      "fuente": "https://cdn.www.gob.pe/uploads/document/file/308242/D.S._N__018-2017-EM_-_Complementarias_en_el_marco_del_PFMI.pdf"
    },
    {
      "id": "MN-4",
      "nombre": "Expediente técnico y autorización de inicio o reinicio",
      "critico": true,
      "glosario": "Prepara el expediente técnico y los documentos arqueológicos que correspondan. No inicies ni reinicies explotación o beneficio solo por tener inscripción en REINFO: se requiere la autorización administrativa correspondiente.",
      "baseLegal": "D.S. 018-2017-EM, arts. 29, 30, 31 y 32; D.S. 009-2025-EM, art. 9.3 literal c) y art. 9.5; D.S. 025-2026-EM, art. 2",
      "entidad": "MINEM - Dirección General de Formalización Minera (trámite y verificación previa); otras autoridades sectoriales para documentos específicos",
      "aplicabilidad": "Minero en proceso de formalización que solicita autorización de inicio o reinicio de explotación y/o beneficio. Incluye expediente técnico, declaración jurada de inexistencia de restos arqueológicos y demás requisitos aplicables.",
      "plazo": "Antes de iniciar o reiniciar actividades. Desde el D.S. 025-2026-EM, la verificación previa del art. 32 se realiza en gabinete por la DGFM.",
      "fuente": "https://busquedas.elperuano.pe/dispositivo/NL/2570415-1"
    },
    {
      "id": "MN-5",
      "nombre": "Declaración semestral de producción y registro de insumos fiscalizados",
      "critico": true,
      "glosario": "Presenta la declaración semestral de producción cuando te corresponda. Si realizas beneficio con insumos químicos fiscalizados, verifica también la inscripción en el registro de SUNAT.",
      "baseLegal": "D.S. 001-2020-EM, art. 7.2 literales c) y d), modificado por D.S. 005-2022-EM y D.S. 010-2022-EM",
      "entidad": "MINEM - Dirección General de Formalización Minera (declaración de producción); SUNAT (Registro para el Control de Bienes Fiscalizados)",
      "aplicabilidad": "Mineros inscritos en REINFO por cada actividad declarada. La declaración semestral tiene una excepción para quien explota en una concesión vigente de la que es titular; el registro de bienes fiscalizados corresponde cuando se realiza beneficio con insumos sujetos a control.",
      "plazo": "Declaración de producción: hasta el último día calendario de julio y enero, por los semestres anteriores, según el texto del art. 7.2(c) modificado por D.S. 010-2022-EM. Registro de bienes fiscalizados: antes de realizar la actividad sujeta a control.",
      "fuente": "https://busquedas.elperuano.pe/dispositivo/NL/2102467-1"
    },
    {
      "id": "MN-6",
      "nombre": "Seguridad y salud ocupacional minera",
      "critico": true,
      "glosario": "Realiza inspecciones para identificar peligros y evaluar riesgos. Implementa estándares, procedimientos y prácticas seguras para las labores mineras, según el tipo de operación.",
      "baseLegal": "D.S. 024-2016-EM, arts. 26 literal m) y 33, modificados por D.S. 034-2023-EM",
      "entidad": "Gobierno regional competente para pequeña minería y minería artesanal; SUNAFIL en el ámbito laboral; OSINERGMIN para gran y mediana minería",
      "aplicabilidad": "Titulares de actividades de pequeña minería y minería artesanal; las medidas concretas dependen de si la operación es subterránea, superficial, de explotación o beneficio.",
      "plazo": "Obligación permanente durante las actividades; efectuar inspecciones, evaluar riesgos e implementar los controles, estándares y procedimientos que correspondan.",
      "fuente": "https://busquedas.elperuano.pe/dispositivo/NL/2249422-2"
    }
  ],
  "Otro rubro productivo": [
    {
      id: "OT-1",
      nombre: "Identificación formal del negocio y permisos base",
      critico: true,
      glosario: "La base para operar con respaldo y acceder a mejores clientes."
    },
    {
      id: "OT-2",
      nombre: "Calendario de fechas y pagos clave",
      critico: false,
      glosario: "Evita recargos o multas por olvidar una fecha."
    },
    {
      id: "OT-3",
      nombre: "Respaldo de cargos y comprobantes",
      critico: false,
      glosario: "Guardar constancias te sirve como prueba si hay una revisión."
    }
  ]
};

let requisitosPorRubro = { ...REQUISITOS_RESPALDO };
let estadosActualesRequisitos = [];

async function cargarBaseNormativa() {
  try {
    const respuesta = await fetch("base-normativa.json");
    if (!respuesta.ok) {
      throw new Error("No se pudo leer base-normativa.json");
    }
    const datosJson = await respuesta.json();
    requisitosPorRubro = {
      ...REQUISITOS_RESPALDO,
      ...datosJson
    };
  } catch (err) {
    console.warn("Usando datos de respaldo locales:", err.message);
    requisitosPorRubro = { ...REQUISITOS_RESPALDO };
  }
  renderizarRequisitosRubro();
}

function obtenerListaRubroActual() {
  const rubro = document.getElementById("prod-rubro").value;
  return requisitosPorRubro[rubro] || REQUISITOS_RESPALDO[rubro] || [];
}

function obtenerMetricasRequisitos() {
  const total = estadosActualesRequisitos.length;
  if (total === 0) {
    return { porcentaje: 0, criticosPendientes: 0 };
  }

  const listaBase = obtenerListaRubroActual();
  let alDia = 0;
  let criticosPendientes = 0;

  for (let i = 0; i < total; i = i + 1) {
    const estado = estadosActualesRequisitos[i];
    const esCritico = listaBase[i] ? Boolean(listaBase[i].critico) : false;
    if (estado === "al_dia") {
      alDia = alDia + 1;
    } else if (esCritico && estado === "pendiente") {
      criticosPendientes = criticosPendientes + 1;
    }
  }

  return {
    porcentaje: Math.round((alDia / total) * 100),
    criticosPendientes: criticosPendientes
  };
}

function renderizarRequisitosRubro() {
  const listaBase = obtenerListaRubroActual();
  estadosActualesRequisitos = listaBase.map(function () {
    return "pendiente";
  });

  const contenedor = document.getElementById("contenedor-requisitos");
  contenedor.innerHTML = "";

  for (let i = 0; i < listaBase.length; i = i + 1) {
    const req = listaBase[i];
    const tarjetaReq = document.createElement("div");
    tarjetaReq.className = "item-requisito";

    const codigo = req.id ? req.id + " — " : "";
    const badge = req.critico ? '<span class="badge-critico">Clave</span>' : "";

    let detalleNormativo = "";
    if (req.baseLegal || req.entidad || req.aplicabilidad || req.plazo || req.fuente) {
      detalleNormativo += '<details class="detalle-normativo"><summary>Ver base legal y fundamento</summary>';
      if (req.baseLegal) {
        detalleNormativo += "<div><strong>Base legal:</strong> " + req.baseLegal + "</div>";
      }
      if (req.entidad) {
        detalleNormativo += "<div><strong>Entidad:</strong> " + req.entidad + "</div>";
      }
      if (req.aplicabilidad) {
        detalleNormativo += "<div><strong>A quién aplica:</strong> " + req.aplicabilidad + "</div>";
      }
      if (req.plazo) {
        detalleNormativo += "<div><strong>Plazo:</strong> " + req.plazo + "</div>";
      }
      if (req.fuente) {
        detalleNormativo +=
          '<div><strong>Fuente:</strong> <a href="' +
          req.fuente +
          '" target="_blank" rel="noopener noreferrer">Consultar norma oficial</a></div>';
      }
      detalleNormativo += "</details>";
    }

    tarjetaReq.innerHTML =
      '<div class="cabecera-requisito">' +
      "<div><strong>" +
      codigo +
      req.nombre +
      "</strong>" +
      badge +
      "</div>" +
      '<select data-indice="' +
      i +
      '" class="selector-estado-req">' +
      '<option value="pendiente">Pendiente</option>' +
      '<option value="en_tramite">En trámite</option>' +
      '<option value="al_dia">Al día</option>' +
      "</select>" +
      "</div>" +
      '<p class="glosario-requisito">' +
      req.glosario +
      "</p>" +
      detalleNormativo;

    contenedor.appendChild(tarjetaReq);
  }

   const selectores = document.querySelectorAll(".selector-estado-req");
  for (let j = 0; j < selectores.length; j = j + 1) {
    selectores[j].addEventListener("change", function (evento) {
      const idx = Number(evento.target.getAttribute("data-indice"));
      estadosActualesRequisitos[idx] = evento.target.value;
      evento.target.closest(".item-requisito").classList.toggle("completo", evento.target.value === "al_dia");
      evaluarSemaforoMype();
      revisarCelebracion();
    });
  }

}

function evaluarSemaforoMype() {
  const nombre = document.getElementById("prod-nombre").value.trim();
  const rubro = document.getElementById("prod-rubro").value;
  const diasPlazo = Number(document.getElementById("prod-dias-plazo").value);
  const claridad = document.getElementById("prod-tiene-instrumento").value;
  const metricas = obtenerMetricasRequisitos();

  document.getElementById("porcentaje-avance").textContent = metricas.porcentaje + "%";
  document.getElementById("criticos-pendientes").textContent = String(metricas.criticosPendientes);
  document.getElementById("anillo-avance").style.setProperty("--pct", metricas.porcentaje);
  document.getElementById("anillo-texto").textContent = metricas.porcentaje + "%";

  let clase = "estado-verde";
  let etiqueta = "VERDE: Vas en buen camino";
  let explicacion =
    "Tienes claridad y avance. Sigue revisando tus fechas con anticipación para evitar apuros.";
  const motivosRojo = [];
  if (claridad === "no") {
    motivosRojo.push("marcaste que no tienes claro qué te toca");
  }
  if (diasPlazo < 0) {
    motivosRojo.push("tu fecha más próxima ya venció");
  }
  if (metricas.criticosPendientes >= 3) {
    motivosRojo.push("tienes " + metricas.criticosPendientes + " requisitos clave pendientes");
  }
  if (motivosRojo.length > 0) {
    clase = "estado-rojo";
    etiqueta = "ROJO: Atención urgente";
    explicacion = "Está en rojo porque " + motivosRojo.join(", ") + ". Prioriza esos puntos hoy.";
  } else if (claridad === "parcial" || diasPlazo <= 10 || metricas.criticosPendientes >= 1) {
    clase = "estado-amarillo";
    etiqueta = "AMARILLO: Revisa a tiempo";
    explicacion =
      "Tienes una fecha cercana o algún punto clave por cerrar. Ordena ese pendiente ahora que aún estás a tiempo.";
  }

  const caja = document.getElementById("semaforo-productor");
  caja.className = "aviso-estado " + clase;
  const tituloNegocio = nombre !== "" ? nombre + " (" + rubro + ")" : rubro;
  caja.textContent = tituloNegocio + " -> " + etiqueta;
  document.getElementById("explicacion-productor").textContent = explicacion;
}

// Icono que cambia según el rubro
const ICONOS_RUBRO = {
  "Pesca artesanal": "🐟",
  "Agroindustria": "🌾",
  "Manufactura": "🏭",
  "Minería en formalización": "⛏️",
  "Otro rubro productivo": "🧰"
};

function actualizarIconoRubro() {
  const icono = document.getElementById("icono-rubro");
  const rubro = document.getElementById("prod-rubro").value;
  icono.textContent = ICONOS_RUBRO[rubro] || "📋";
  icono.classList.remove("salto");
  void icono.offsetWidth; // reinicia la animación
  icono.classList.add("salto");
}

// Celebración con confeti al completar todos los requisitos
function lanzarConfeti() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return;
  }
  const colores = ["#0c7a7c", "#1d78a8", "#bfe6f5", "#d7f2ec", "#facc15", "#f97316"];
  for (let i = 0; i < 60; i = i + 1) {
    const pieza = document.createElement("span");
    pieza.className = "confeti";
    pieza.style.left = Math.random() * 100 + "vw";
    pieza.style.background = colores[i % colores.length];
    pieza.style.animationDelay = Math.random() * 0.6 + "s";
    document.body.appendChild(pieza);
    setTimeout(function () {
      pieza.remove();
    }, 3200);
  }
}

let yaCelebro = false;
function revisarCelebracion() {
  const completo =
    estadosActualesRequisitos.length > 0 &&
    estadosActualesRequisitos.every(function (e) {
      return e === "al_dia";
    });
  const aviso = document.getElementById("explicacion-productor");
  if (completo && !yaCelebro) {
    yaCelebro = true;
    lanzarConfeti();
    aviso.insertAdjacentHTML(
      "afterend",
      '<p class="celebracion" id="msg-celebracion">🎉 ¡Excelente! Marcaste todos tus requisitos al día. Sigue revisando tus fechas con anticipación.</p>'
    );
  } else if (!completo) {
    yaCelebro = false;
    const msg = document.getElementById("msg-celebracion");
    if (msg) {
      msg.remove();
    }
  }
}

document.getElementById("prod-rubro").addEventListener("change", function () {
  actualizarIconoRubro();
  renderizarRequisitosRubro();
  revisarCelebracion();
});
document.getElementById("btn-evaluar-productor").addEventListener("click", evaluarSemaforoMype);

// ==========================================
// 2. ESCENARIOS DE RETRASO (7, 15, 30 DIAS)
// ==========================================
function actualizarEscenariosRetraso() {
  const montoDia = Number(document.getElementById("calc-monto-dia").value);
  const presupuesto = Number(document.getElementById("calc-presupuesto").value);
  const cuerpo = document.getElementById("cuerpo-escenarios");
  cuerpo.innerHTML = "";

  const tramos = [7, 15, 30];
  for (let i = 0; i < tramos.length; i = i + 1) {
    const dias = tramos[i];
    const costo = montoDia * dias;
    const diferencia = costo - presupuesto;
    const signoDiff = diferencia >= 0 ? "+S/ " + diferencia : "-S/ " + Math.abs(diferencia);

    const fila = document.createElement("tr");
    fila.innerHTML =
      "<td>Esperar " +
      dias +
      " días</td>" +
      "<td>S/ " +
      costo +
      "</td>" +
      "<td>" +
      signoDiff +
      "</td>";
    cuerpo.appendChild(fila);
  }
}

document.getElementById("btn-calcular-riesgo").addEventListener("click", actualizarEscenariosRetraso);

// ==========================================
// 3. TAREAS PENDIENTES Y BITACORA
// ==========================================
function configurarListaSimple(idInput, idBoton, idLista, idAviso, itemsIniciales, prefijoItem) {
  const input = document.getElementById(idInput);
  const boton = document.getElementById(idBoton);
  const lista = document.getElementById(idLista);
  const aviso = document.getElementById(idAviso);

  function agregar(texto) {
    const li = document.createElement("li");
    li.textContent = prefijoItem ? prefijoItem + texto : texto;
    lista.appendChild(li);
  }

  for (let i = 0; i < itemsIniciales.length; i = i + 1) {
    agregar(itemsIniciales[i]);
  }

  boton.addEventListener("click", function () {
    const limpio = input.value.trim();
    if (limpio === "") {
      aviso.textContent = "Escribe algo antes de agregar.";
      return;
    }
    aviso.textContent = "";
    agregar(limpio);
    input.value = "";
  });
}

configurarListaSimple(
  "input-obligacion",
  "btn-agregar-obligacion",
  "lista-obligaciones",
  "aviso-obligacion",
  [
    "Revisar cuándo vence mi próximo trámite o pago",
    "Juntar mis papeles o constancias en una sola carpeta"
  ],
  ""
);

configurarListaSimple(
  "input-bitacora",
  "btn-agregar-bitacora",
  "lista-bitacora",
  "aviso-bitacora",
  ["Inicio de control preventivo en FormalizaLex"],
  "Avance: "
);

// ==========================================
// 4. PLAN MYPE Y VIGENCIA
// ==========================================
function calcularPlanYVigencia() {
  const tipoPlan = document.getElementById("sub-perfil").value;
  const meses = Number(document.getElementById("sub-meses").value);
  const diasRestantes = Number(document.getElementById("sub-dias-restantes").value);

  const mesesSeguros = meses > 0 ? meses : 1;
  let monto = 80 * mesesSeguros;
  let detalle = mesesSeguros + " mes(es) a S/ 80 cada uno.";

  if (tipoPlan === "pyme_anual") {
    monto = 800;
    detalle = "Pago anual (10 meses cobrados, 2 de ahorro): ahorras S/ 160 frente a S/ 960.";
  }

  let estadoVigencia = "Activa — te quedan " + diasRestantes + " día(s).";
  if (diasRestantes <= 0) {
    estadoVigencia = "Vencida — renueva tu plan para seguir con tus recordatorios.";
  } else if (diasRestantes <= 5) {
    estadoVigencia = "Por vencer — te quedan " + diasRestantes + " día(s).";
  }

  document.getElementById("sub-monto-total").innerHTML = "<strong>Monto del plan:</strong> S/ " + monto;
  document.getElementById("sub-ahorro").innerHTML = "<strong>Detalle:</strong> " + detalle;
  document.getElementById("sub-vigencia").innerHTML = "<strong>Vigencia:</strong> " + estadoVigencia;
}

document.getElementById("btn-calcular-sub").addEventListener("click", calcularPlanYVigencia);

document.getElementById("btn-validar-sub").addEventListener("click", function () {
  const correo = document.getElementById("sub-correo").value.trim().toLowerCase();
  const confirmacion = document.getElementById("sub-confirmacion");

  if (correo === "") {
    confirmacion.textContent = "Escribe un correo para guardar tu aviso de demostración.";
    return;
  }

  confirmacion.textContent = "Listo: correo registrado en modo demostración (" + correo + ").";
});

// Inicializar al cargar
cargarBaseNormativa();
actualizarEscenariosRetraso();
calcularPlanYVigencia();

// ==========================================
// 5. BARRA DE NAVEGACION: RESALTAR SECCION ACTUAL
// ==========================================
(function () {
  const enlaces = document.querySelectorAll('nav a[href^="#"]');
  if (!enlaces.length) {
    return;
  }

  const secciones = [];
  for (let i = 0; i < enlaces.length; i = i + 1) {
    const id = enlaces[i].getAttribute("href").slice(1);
    const seccion = id ? document.getElementById(id) : null;
    if (seccion) {
      secciones.push({ enlace: enlaces[i], seccion: seccion });
    }
  }

  if (!secciones.length) {
    return;
  }

  function marcarActiva() {
    const posicionActual = window.scrollY + 120;
    let activa = secciones[0];

    for (let i = 0; i < secciones.length; i = i + 1) {
      if (secciones[i].seccion.offsetTop <= posicionActual) {
        activa = secciones[i];
      }
    }

    for (let i = 0; i < secciones.length; i = i + 1) {
      secciones[i].enlace.classList.toggle("activo", secciones[i] === activa);
    }
  }

  window.addEventListener("scroll", marcarActiva, { passive: true });
  marcarActiva();
})();