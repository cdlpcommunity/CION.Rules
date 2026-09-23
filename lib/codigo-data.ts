export type Sancion = {
  nivel: string
  detalle: string
}

export type Criterio = {
  letra: string
  titulo: string
  cuerpo: string
  sanciones?: Sancion[]
}

export type Modulo = {
  id: string
  numero: string
  numeroLargo: string
  titulo: string
  estandarEtiqueta: string
  estandarTitulo: string
  intro: string
  criterios: Criterio[]
}

export const documentoTitulo = "CÓDIGO DE INTERACCIÓN CIÓN-LAB"

export const modulos: Modulo[] = [
  {
    id: "modulo-01",
    numero: "01",
    numeroLargo: "MÓDULO 01",
    titulo: "SALVAGUARDA DE DIGNIDAD Y ENTORNO SEGURO",
    estandarEtiqueta: "Estándar 1.1",
    estandarTitulo: "Protocolo de Anti-Hostigamiento e Integridad Interpersonal",
    intro:
      "La comunidad CIÓN-Lab se rige bajo la premisa irrenunciable de la salvaguarda mutua. Se establece una política de cero tolerancia ante cualquier manifestación de conducta sistemática o puntual destinada a menoscabar, intimidar, degradar o marginar a cualquier miembro de la comunidad, sin importar su rol, antigüedad o jerarquía académica.",
    criterios: [
      {
        letra: "A",
        titulo: "Definición de Hostigamiento y Acoso",
        cuerpo:
          "Se considera vulneración directa toda acción repetida o de alto impacto que genere un entorno intimidatorio, hostil u ofensivo. Esto incluye, pero no se limita a: persecución verbal en chats públicos, envío no solicitado de contenido amenazante o de acoso sexual, difamación, doxxing (divulgación no consentida de datos personales o privados) y la incitación directa al rechazo colectivo hacia un integrante.",
      },
      {
        letra: "B",
        titulo: "Erradicación del Bullying y la Burla Sistemática",
        cuerpo:
          "La libertad de expresión dentro del laboratorio no ampara la humillación ni la ridiculización deliberada. Queda prohibida la creación o difusión de stickers, memes, capturas de pantalla fuera de contexto o videos manipulados cuyo propósito explícito sea exponer, burlarse o menoscabar la reputación de un compañero o docente.",
      },
      {
        letra: "C",
        titulo: "Alcance Transversal e Interacciones Privadas",
        cuerpo:
          "Las normas de integridad no se limitan a los canales públicos de WhatsApp o Discord. Si una conducta de acoso u hostigamiento se origina en mensajes privados (DM) entre miembros de la comunidad y afecta directamente el bienestar, la participación o la seguridad de la víctima en los espacios comunes, la administración intervendrá con el mismo rigor operativo previa verificación de pruebas.",
      },
      {
        letra: "D",
        titulo: "Mecanismo de Denuncia y Protección a la Víctima",
        cuerpo:
          "Todo miembro que se sienta vulnerado o presencie un acto de hostigamiento tiene derecho a reportarlo directamente a la administración a través de la canalización privada. Se garantiza el anonimato del denunciante durante la fase de evaluación para evitar represalias o exposición innecesaria.",
      },
      {
        letra: "E",
        titulo: "Gradación de Sanciones y Consecuencias",
        cuerpo:
          "La transgresión de este estándar conlleva medidas disciplinarias inmediatas proporcionalmente evaluadas:",
        sanciones: [
          {
            nivel: "Falta Grave (Primer incidente o burla no directa)",
            detalle:
              "Advertencia formal por escrito, remoción inmediata del contenido y suspensión temporal de interacción en el grupo por 24 a 48 horas.",
          },
          {
            nivel: "Falta Gravísima (Acoso reiterado, doxxing, hostigamiento explícito o difamación)",
            detalle:
              "Expulsión definitiva y permanente de todos los canales de WhatsApp, servidores de Discord y proyectos activos de CIÓN-Lab, con notificación a la directiva académica si la gravedad de la falta lo requiere.",
          },
        ],
      },
    ],
  },
  {
    id: "modulo-02",
    numero: "02",
    numeroLargo: "MÓDULO 02",
    titulo: "LÍMITES DE INTERACCIÓN Y DINÁMICAS DE CONFIANZA",
    estandarEtiqueta: "Estándar 2.1",
    estandarTitulo: "Gestión del Humor, Camaradería y Relaciones Interpersonales",
    intro:
      "En CIÓN-Lab se promueve un ambiente orgánico, ameno y desenfadado donde el humor y la camaradería forman parte de la vida universitaria. Sin embargo, para salvaguardar la experiencia de todos los usuarios y evitar la pasivo-agresividad, la libertad para realizar bromas o comentarios pesados queda estrictamente vinculada al nivel de confianza mutua y explícita entre los involucrados.",
    criterios: [
      {
        letra: "A",
        titulo: "El Límite del Círculo de Confianza",
        cuerpo:
          'Las bromas pesadas, sarcasmo punzante, apodos o ironías solo son admisibles entre miembros que mantengan una relación de amistad previa y recíproca. Asumir "confianza" con un integrante nuevo, desconocido o con quien no se mantenga un vínculo cercano no está permitido y será calificado como una falta de respeto.',
      },
      {
        letra: "B",
        titulo: "Estándar de Trato en Espacios Públicos",
        cuerpo:
          'En las interacciones abiertas dentro de los grupos generales de WhatsApp, canales de debate en Discord o salas de trabajo, el trato hacia desconocidos o compañeros de menor interacción debe ser cordial, neutro y respetuoso. Si un usuario expresa incomodidad ante un comentario, la broma debe cesar de inmediato sin lugar a justificaciones como "era jugando" o "estás exagerando".',
      },
      {
        letra: "C",
        titulo: "Prohibición de la Humillación Disfrazada de Humor",
        cuerpo:
          'No se tolerará el uso del "humor negro", la sátira o los memes como canal encubierto para emitir comentarios discriminatorios, burlas sobre el aspecto físico, desempeño académico, origen, género o situación personal de ningún miembro.',
      },
      {
        letra: "D",
        titulo: "Autorregulación y Retirada a Tiempo",
        cuerpo:
          "Se incentiva a que los involucrados resuelvan malentendidos leves de forma directa y madura. Si una dinámica de juego o broma entre amigos comienza a escalar e incomodar al resto del grupo en un canal público, los administradores podrán pausar la conversación o solicitar que continúen por mensaje privado (DM).",
      },
      {
        letra: "E",
        titulo: "Gradación de Sanciones por Exceso de Confianza o Burla",
        cuerpo: "",
        sanciones: [
          {
            nivel: "Falta Leve (Comentario fuera de lugar o broma no consentida a un desconocido)",
            detalle:
              "Llamado de atención público o privado por parte de un moderador, con obligación de corregir la actitud.",
          },
          {
            nivel: "Falta Reincidente (Insistencia en bromas tras la negativa del afectado o uso de sarcasmo hostil)",
            detalle: "Silenciamiento temporal (timeout) del usuario en el canal de chat de 12 a 24 horas.",
          },
        ],
      },
    ],
  },
  {
    id: "modulo-03",
    numero: "03",
    numeroLargo: "MÓDULO 03",
    titulo: "GESTIÓN DE CONTENIDO SENSIBLE Y RESPONSABILIDAD DE EMISIÓN",
    estandarEtiqueta: "Estándar 3.1",
    estandarTitulo: "Filtro de Contenido Explícito, Sensible y Propiedad de Mensaje",
    intro:
      "En CIÓN-Lab se respeta la libertad de debate y el análisis crítico de la realidad social, periodística y audiovisual. Sin embargo, para mantener una experiencia segura, pulcra y accesible para todos los miembros, el envío de material visual, textual o interactivo de naturaleza sensible queda sujeto a estrictos criterios de filtrado, intención y etiquetado obligatorio.",
    criterios: [
      {
        letra: "A",
        titulo: "Prohibición de Contenido por Morbo o Entretenimiento",
        cuerpo:
          "Queda estrictamente prohibido compartir imágenes, videos, audios o enlaces con contenido pornográfico, explícitamente sexual (NSFW), gore, violencia explícita o crueldad hacia personas o animales con fines de entretenimiento, burla, morbo o impacto gráfico injustificado.",
      },
      {
        letra: "B",
        titulo: "Excepción por Valor Informativo o Académico",
        cuerpo:
          "Se permite el abordaje de eventos reales, coberturas periodísticas o piezas audiovisuales de tono sensible únicamente cuando posean un valor informativo, educativo o de análisis relevante para el área de las comunicaciones. La relevancia debe ser clara o estar acompañada de un contexto explicativo por parte del emisor.",
      },
      {
        letra: "C",
        titulo: "Protocolo Obligatorio de Censura y Etiquetado",
        cuerpo:
          'Todo archivo o enlace de carácter sensible que cumpla con el Criterio B debe enviarse bajo el formato de contenido oculto / censurado (spoiler) tanto en WhatsApp como en Discord. El mensaje debe anteceder obligatoriamente una advertencia explícita en texto claro (ej. "[ADVERTENCIA: Contenido gráfico/periodístico sensible sobre X tema]") antes de revelar el archivo, permitiendo que cada usuario decida voluntariamente si desea consumirlo.',
      },
      {
        letra: "D",
        titulo: "Responsabilidad Individual del Emisor",
        cuerpo:
          'Cada usuario es legal, ética y administrativamente responsable de los enlaces, archivos, stickers y textos que emite en los canales de la comunidad. Alegar desconocimiento sobre la naturaleza del contenido enviado o argumentar que fue un "reenvío automático" no exime de responsabilidad al propietario de la cuenta.',
      },
      {
        letra: "E",
        titulo: "Gradación de Sanciones por Difusión Irresponsable",
        cuerpo: "",
        sanciones: [
          {
            nivel: "Falta Moderada (Envío de contenido sensible con fin informativo pero omitiendo el etiquetado/censura)",
            detalle:
              "Eliminación inmediata del mensaje por parte de la administración y llamado de atención en privado para exigir el cumplimiento del protocolo.",
          },
          {
            nivel: "Falta Grave (Envío deliberado de contenido explícito por morbo, NSFW o violencia sin valor académico)",
            detalle:
              "Remoción del archivo, silenciamiento temporal del usuario (timeout) de 24 a 72 horas y registro de la falta en el historial de la cuenta.",
          },
        ],
      },
    ],
  },
  {
    id: "modulo-04",
    numero: "04",
    numeroLargo: "MÓDULO 04",
    titulo: "ANTI-AUTORITARISMO Y MEDIACIÓN ADMINISTRATIVA",
    estandarEtiqueta: "Estándar 4.1",
    estandarTitulo: "Desempeño Ético, Transparencia Operativa y Control del Poder",
    intro:
      "Los administradores y moderadores de CIÓN-Lab operan como facilitadores de la convivencia, mediadores de conflictos y resguardos de la comunidad, no como figuras de poder absoluto, jueces autoritarios ni entes punitivos arbitrarios. La labor de moderación se rige por la imparcialidad, el debido proceso y la rendición de cuentas pública frente al colectivo.",
    criterios: [
      {
        letra: "A",
        titulo: "Neutralidad e Imparcialidad Institucional",
        cuerpo:
          "Ningún administrador podrá aplicar llamadas de atención, silenciar o expulsar a un usuario motivado por disputas personales, antipatías, diferencias de opinión académica o discusiones en las que el propio moderador sea parte interesada. Si surge un conflicto personal entre un miembro y un administrador, este último deberá inhibirse de actuar y delegar la resolución en otro integrante del equipo.",
      },
      {
        letra: "B",
        titulo: "Obligación de Motivar y Justificar Toda Sanción",
        cuerpo:
          "Quedan prohibidas las sanciones intempestivas o sin sustento. Toda acción disciplinaria (advertencia, silenciamiento o expulsión) debe estar debidamente tipificada en este Código y comunicada de forma privada al afectado, señalando explícitamente el módulo, estándar y criterio infringidos, adjuntando la evidencia correspondiente.",
      },
      {
        letra: "C",
        titulo: "Derecho a Réplica y Canal de Apelación",
        cuerpo:
          "Todo usuario sancionado cuenta con el derecho garantizado a exponer su postura y aportar contexto en un espacio de diálogo privado. Las apelaciones serán revisadas colectivamente por la mesa directiva en CIÓN.Adm, evitando que el criterio individual de un solo moderador determine el destino de un miembro.",
      },
      {
        letra: "D",
        titulo: "Prohibición de Abuso de Herramientas y Censura Arbitraria",
        cuerpo:
          "La eliminación de mensajes, el uso de modos pausados (slowmode), la restricción de permisos o la modificación de nombres de usuario solo procederán ante faltas claras a la convivencia. Ningún canal será cerrado o restringido como mecanismo de censura ante debates incómodos o críticas legítimas hacia la gestión comunitaria.",
      },
      {
        letra: "E",
        titulo: "Mecanismo de Recusación y Sanción a Administradores",
        cuerpo:
          "El equipo administrativo no goza de inmunidad. Si un moderador incurre en abuso de poder, acoso, faltas de respeto o vulneración deliberada de este Código, el caso podrá ser reportado por los miembros. La reincidencia en estas conductas conllevará la remoción inmediata e irrevocable del cargo administrativo.",
      },
    ],
  },
  {
    id: "modulo-05",
    numero: "05",
    numeroLargo: "MÓDULO 05",
    titulo: "ARQUITECTURA DE CANALES Y EFICIENCIA DE EMISIÓN",
    estandarEtiqueta: "Estándar 5.1",
    estandarTitulo: "Flujo de Información, Organización y Prevención de Saturación",
    intro:
      "Para garantizar una experiencia óptima en la ecosistema digital de CIÓN-Lab, el tráfico de mensajes debe responder a una estructura clara de uso de canales. La libertad de participación exige responsabilidad en la forma, el formato y el volumen de la información emitida, evitando la dispersión del contenido y el spam.",
    criterios: [
      {
        letra: "A",
        titulo: "Especialización de Espacios y Delimitación Temática",
        cuerpo:
          "Cada grupo y canal cumple una función técnica específica dentro de la red. Los anuncios oficiales e información académica corresponden exclusivamente a los canales institucionales (CIÓN.avisos); las interacciones espontáneas, el networking, los debates informales y el entretenimiento deben canalizarse por los espacios designados para ello (CIÓN.chat o servidores de Discord).",
      },
      {
        letra: "B",
        titulo: "Prohibición de Spam, Inundación y Contenido Comercial Descontextualizado",
        cuerpo:
          "Se prohíbe el envío masivo e injustificado de mensajes repetitivos, la saturación de stickers sin propósito interactivo (sticker spam), las mensiones masivas innecesarias (@everyone / @here) y la promoción de servicios, negocios personales o enlaces de terceros no relacionados con la vida universitaria, salvo previa autorización administrativa.",
      },
      {
        letra: "C",
        titulo: "Etiqueta de Difusión de Proyectos Internos",
        cuerpo:
          "Los miembros que deseen difundir iniciativas personales, encuestas académicas, convocatorias de proyectos o portafolios creativos deberán hacerlo en los canales habilitados para interacción o producción colaborativa, acompañando el enlace de una breve síntesis explicativa.",
      },
      {
        letra: "D",
        titulo: "Preservación de la Limpieza en Canales Oficiales",
        cuerpo:
          "En los canales de lectura o difusión unidireccional no se permite la interrupción del flujo informativo con discusiones secundarias. Cualquier consulta derivada de un aviso oficial deberá realizarse en el canal de interacción (CIÓN.chat) citando el mensaje original.",
      },
      {
        letra: "E",
        titulo: "Gradación de Sanciones por Distorsión de Canales",
        cuerpo: "",
        sanciones: [
          {
            nivel: "Falta Leve (Uso inadecuado del canal o envío moderado de spam)",
            detalle:
              "Eliminación del contenido fuera de lugar y redireccionamiento del usuario hacia el canal correspondiente por parte de la moderación.",
          },
          {
            nivel:
              "Falta Reincidente (Insistencia en saturación de canales, uso no autorizado de etiquetas masivas o spam comercial)",
            detalle:
              "Restricción temporal de envío de archivos multimedia o silenciamiento (timeout) del usuario por un periodo de 12 a 24 horas.",
          },
        ],
      },
    ],
  },
  {
    id: "modulo-06",
    numero: "06",
    numeroLargo: "MÓDULO 06",
    titulo: "MECANISMOS DE MEDIACIÓN Y PROCEDIMIENTO DISCIPLINARIO",
    estandarEtiqueta: "Estándar 6.1",
    estandarTitulo: "Resolución de Conflictos, Debido Proceso y Canalización Directa",
    intro:
      "Para garantizar un entorno auto-regulado, transparente y libre de anarquía o autoritarismo, CIÓN-Lab establece un protocolo estandarizado de solución de controversias. Se prioriza la vía del diálogo directo y la mediación responsable antes de la aplicación de sanciones punitivas, salvaguardando siempre el derecho al debido proceso.",
    criterios: [
      {
        letra: "A",
        titulo: "Tratamiento Privado de Controversias",
        cuerpo:
          "Las desavenencias personales, malos entendidos o discusiones acaloradas entre dos o más integrantes deben abordarse y resolverse de manera privada mediante mensajería directa (DM). Queda estrictamente prohibido utilizar los chats públicos de la comunidad para ventilaciones personales, linchamientos mediáticos o generación de drama colectivo.",
      },
      {
        letra: "B",
        titulo: "Solicitud de Mediación Administrativa",
        cuerpo:
          "En caso de que un conflicto interpersonal en el marco de las actividades de la comunidad no pueda resolverse de forma privada, cualquiera de las partes involucradas podrá solicitar la intervención de un moderador neutral de CIÓN.Adm. El moderador actuará como un facilitador de la comunicación para alcanzar un acuerdo respetuoso sin tomar postura arbitraria.",
      },
      {
        letra: "C",
        titulo: "Secuencia y Tipificación del Debido Proceso",
        cuerpo:
          "Salvo en casos de extrema gravedad (como acoso explícito, doxxing o violencia directa que exijan intervención inmediata), la gestión disciplinaria seguirá una escala progresiva y comunicada formalmente:",
        sanciones: [
          {
            nivel: "Aviso Informativo (Warning)",
            detalle: "Notificación privada sobre el estándar infringido y llamado a la autorregulación.",
          },
          {
            nivel: "Llamada de Atención Registrada",
            detalle: "Notificación formal de la reincidencia, con compromiso por escrito de abstención.",
          },
          {
            nivel: "Restricción Temporal (Timeout/Mute)",
            detalle:
              "Inhabilitación para enviar mensajes o contenido multimedia en los canales de la comunidad por un periodo determinado (de 12 horas a 7 días).",
          },
          {
            nivel: "Inhabilitación Definitiva (Ban)",
            detalle: "Separación permanente de todos los grupos, canales de Discord y proyectos de CIÓN-Lab.",
          },
        ],
      },
      {
        letra: "D",
        titulo: "Garantía de Apelación y Revisión de Caso",
        cuerpo:
          "Todo usuario que considere haber sido sancionado injustamente, o que perciba un sesgo en la decisión del moderador, tiene un plazo de 48 horas para presentar un recurso de apelación ante la mesa directiva en CIÓN.Adm. La directiva revisará los hechos en sesión privada y emitirá un veredicto definitivo e inapelable por mayoría simple.",
      },
      {
        letra: "E",
        titulo: "Registro y Transparencia de Casos",
        cuerpo:
          "La administración mantendrá un registro interno y confidencial de las sanciones graves aplicadas, con la finalidad de argumentar el historial de reincidencia en caso de apelaciones y evitar decisiones basadas en especulaciones o subjetividades.",
      },
    ],
  },
]

export const redesSociales = [
  { nombre: "YouTube", handle: "@CIÓN-Lab", url: "https://www.youtube.com/@CIÓN-Lab" },
  { nombre: "TikTok", handle: "@cion.lab", url: "https://www.tiktok.com/@cion.lab" },
  { nombre: "Instagram", handle: "@cion.lab", url: "https://www.instagram.com/cion.lab" },
]
