export const defaultBeneficiary = {
    last_name: '',
    first_name: '',
    identification: '',
    birth_date: '',
    age: 1,
    gender: 'M',
    place_of_birth: '',
    height: 0,
    weight: 0,
    identification_type: 'V',
}

export const defaultCustomer = {
    plan_membership_id: '',
    last_name: '',
    first_name: '',
    identification: '',
    address: '',
    conventional_phone: '',
    email: '',
    cellphone: '',
    identification_type: 'V',
}

export const invoiceInformationDefault = {
    is_customer: '',
    business_name: '',
    ruc: '',
    email: '',
    phone: '',
    identifier: '',
    address: '',
    type_identifier: '',
}

export const defaultUser = {
    firstName: '',
    lastName: '',
    email: '',
    contactPhone: '',
    birthDate: '',
    password: '',
    identifier: '',
}

export const beneficiaries = [
    defaultBeneficiary,
]

export const requirementsText = `
    <p class="mb-2 font-bold">El cliente deberá remitir a Safeway la siguiente documentación:</p>
    <ul class="safeway-link-ul ml-10 mb-10">
        <li class="mb-3">Solicitud de acceso a la prestación del servicio de asistencia. </li>
        <li class="mb-3">Copia del primer reclamo presentado a la compañía de seguros. </li>
        <li class="mb-3">Carta de garantía hospitalaria emitida por la respectiva compañía de seguros.</li>
    </ul>
    <p class="text-primary text-center text-sm mt-5">* El servicio de asistencia se prestará siempre y cuando se cumplan todos los requisitos establecidos en la cláusula Quinta del contrato.</p>
`

export const termsText = `
<ul class="safeway-link-ul">
    <li class="mb-3">El servicio de asistencia se prestará <b>única y exclusivamente</b> para viajes al exterior que tengan por objeto principal el llevar a cabo una <b>cirugía, operación o procedimiento quirúrgico</b> necesario para el tratamiento de las <b>enfermedades críticas</b> que constan detalladas en el <b>Anexo IV</b> que <b>requieran de hospitalización</b> en hospitales y clínicas legalmente reconocidas por un periodo de <b>veinticuatro (24) horas o más.</b> La cirugía que se limite a "Hospital del día" o sea <b>menor a veinticuatro (24) horas,</b> al ser una "cirugía ambulatoria", <b>no aplicará</b> para el servicio de asistencia. </li>
    <li class="mb-3"><b>No aplica</b> para viajes al exterior que tengan por objeto <b>consultas médicas</b>, obtención de<b> segundas opiniones médicas, chequeos de control </b>posteriores a una cirugía o tratamiento médico, tratamientos <b>ambulatorios </b>excepto por lo relativo a la quimioterapia, radioterapia y diálisis, ni para cirugías <b>preventivas</b>, cirugías estéticas y cirugías relacionadas o derivadas del tratamiento de <b>enfermedades mentales.</b></li>
    <li class="mb-3">La enfermedad crítica deberá ser diagnosticada por primera vez luego de transcurridos <strong>90 días desde la emisión</strong> del contrato, excepto en el caso de accidentes o enfermedades infecciosas.</li>
    <li class="mb-3">El beneficiario deberá contar con un seguro médico con cobertura internacional <strong>activo al momento de solicitar</strong> el servicio.</li>
    <li class="mb-3">El cliente notificará por escrito a Safeway con al menos (cinco)<strong> 5 días hábiles de anticipación</strong> a la fecha en que se produzca el viaje al exterior para el tratamiento de la enfermedad crítica.</li>
    <li class="mb-3">El beneficiario deberá trasladarse necesariamente <strong>desde Ecuador a cualquier otro país del continente americano</strong> para el tratamiento de la enfermedad crítica.</li>
    <li class="mb-3">El servicio de asistencia se prestará por <strong>una sola vez por beneficiario y por enfermedad</strong> durante la vigencia del contrato y cualquiera de sus renovaciones. No obstante, el servicio se podrá prestar para el mismo beneficiario para el tratamiento en el exterior de las otras enfermedades críticas.</li>
    <li class="mb-3">El cliente <strong>deberá estar al día en sus pagos</strong> al momento de solicitar la prestación del servicio.</li>
</ul>    
<p class="text-primary text-center text-sm">* El servicio de asistencia se prestará siempre y cuando se cumplan todas las condiciones establecidas en la cláusula Cuarta del contrato.</p>
`

export const benefitText = `
<p class="mb-3 font-bold">Una vez que SAFEWAY verifique que se cumplen todas las condiciones y requisitos del contrato, se llevará a cabo el siguiente procedimiento:</p>
<ul class="safeway-link-ul ml-10  mb-10">
    <li class="mb-3">El cliente enviará a Safeway el<strong> “formulario de confirmación de viaje al exterior”</strong> en el que constará la información del beneficiario que viajará a atenderse, al igual que la de el/los acompañante/s que viajarán, así como las fechas del viaje, dirección del hospital, datos para las reservas de hotel y vehículo, etc.</li>
    <li class="mb-3">Una vez recibido dicho formulario, <strong>Safeway gestionará la reservas de los vuelos, hotel y vehículo</strong> de acuerdo a las características del plan contratado por el cliente y en función de las fechas de viaje facilitadas por este.</li>
    <li class="mb-3"><strong>Safeway remitirá al cliente la información relativa al viaje</strong> con todas las reservas efectuadas para que el cliente proceda con su aprobación por escrito en un plazo de 24 horas.</li>
    <li class="mb-3">En caso de que <b>el Cliente quiera realizar algún cambio,</b> ya sea de pasajes, alojamiento y movilización, Safeway lo procesará, pero cualquier valor adicional que se deba pagar por los cambios solicitados, <b>será de cuenta exclusiva del Cliente.</b> Safeway únicamente estará obligada a proporcionar los beneficios que constan en el plan escogido y contratado por el cliente.</li>
    <li class="mb-3">Una vez aprobado el itinerario por el Cliente, <b>Safeway procederá al pago de los pasajes aéreos, alojamiento, movilización y tarjetas Smartsim.</b> Las reservas se harán a nombre del Beneficiario y su acompañante o acompañantes, en caso de que aplique, y entregará al Cliente toda la documentación necesaria para el viaje.</li>
</ul>
<p class="mt-2 text-primary text-center text-sm">* El servicio de asistencia se prestará de acuerdo a lo estipulado en la cláusula Sexta del contrato.</p>
`

export const multiTrips = `
<ul class="safeway-link-ul">
    <li class="mb-3">El servicio de asistencia se prestará para un <strong>máximo de tres viajes por Beneficiario y por enfermedad</strong> durante la vigencia del contrato. Aplica un viaje por beneficiario y por enfermedad por cada periodo de doce (12) meses hasta el límite máximo de viajes establecidos en el presente anexo.</li>
    <li class="mb-3">El servicio de asistencia se prestará <strong>única y exclusivamente</strong> para viajes al exterior que tengan por objeto principal el llevar a cabo una <strong>cirugía, operación o procedimiento quirúrgico</strong> necesario para el tratamiento de las <strong>enfermedades críticas</strong> que constan detalladas en el <strong>Anexo IV</strong> que <strong>requieran de hospitalización</strong> en hospitales y clínicas legalmente reconocidas por un periodo de <strong>veinticuatro (24) horas o más.</strong> La cirugía que se limite a "Hospital del día" o sea<strong> menor a veinticuatro (24) horas,</strong> al ser una "cirugía ambulatoria", <strong>no aplicará</strong> para el servicio de asistencia.</li>
    <li class="mb-3"><strong>No aplica</strong> para viajes al exterior que tengan por objeto <strong>consultas médicas, </strong>obtención de <strong>segundas opiniones médicas, chequeos de control </strong>posteriores a una cirugía o tratamiento médico, tratamientos <strong>ambulatorios </strong>excepto por lo relativo a la quimioterapia, radioterapia y diálisis, ni para cirugías <strong>preventivas</strong>, cirugías <strong>estéticas </strong>y cirugías relacionadas o derivadas del tratamiento de <strong>enfermedades mentales.</strong></li>
</ul>
<p class="mt-2 text-primary text-center text-sm">* El servicio de asistencia se prestará siempre y cuando se cumplan todas las condiciones establecidas en las cláusulas Cuarta y Quinta del contrato.</p>
`
export const illnessesaAndAccidents = `
<ul class="safeway-link-ul">
    <li class="mb-3"><strong>Se entenderá por enfermedad</strong> una alteración o desviación del estado fisiológico en una o varias partes del cuerpo, por causas en general conocidas, manifestadas por síntomas y signos característicos, y cuya evolución es mas o menos previsible. <strong>Se entenderá por accidente</strong> todo suceso repentino e imprevisto que ocurra dentro del plazo del contrato que resulte en lesión corporal, cuya causa o una de cuyas causas, sea externa al cuerpo de la víctima y fuera del control de la misma.</li>
    <li class="mb-3">El servicio de asistencia se prestará <strong>única y exclusivamente</strong> para viajes al exterior que tengan por objeto principal el llevar a cabo una cirugía, <strong>operación o procedimiento quirúrgico</strong> que <strong>requiera de hospitalización</strong> en hospitales y clínicas legalmente reconocidas por un periodo de <strong>veinticuatro (24) horas o más.</strong> La cirugía que se limite a "Hospital del día" <strong>o sea menor a veinticuatro (24) horas, </strong>al ser una "cirugía ambulatoria", <strong>no aplicará</strong> para el servicio de asistencia.</li>
    <li class="mb-3"><strong>No aplica</strong> para viajes al exterior que tengan por objeto <strong>consultas médicas</strong>, obtención de <strong>segundas opiniones médicas, chequeos de control</strong> posteriores a una cirugía o tratamiento médico, tratamientos <strong>ambulatorios </strong>excepto por lo relativo a la quimioterapia, radioterapia y diálisis, ni para cirugías <strong>preventivas</strong>, cirugías <strong>estéticas </strong>y cirugías relacionadas o derivadas del tratamiento de <strong>enfermedades mentales.</strong></li>
</ul>
<p class="mt-2 text-primary text-center text-sm">* El servicio de asistencia se prestará siempre y cuando se cumplan todas las condiciones establecidas en las cláusulas Cuarta y Quinta del contrato.</p>
`

export const cities = [
    'Guayaquil',
    'Quito',
    'Cuenca',
    'Santo Domingo',
    'Machala',
    'Durán',
    'Manta',
    'Portoviejo',
    'Loja',
    'Ambato',
    'Esmeraldas',
    'Quevedo',
    'Riobamba',
    'Milagro',
    'Ibarra',
    'La Libertad',
    'Babahoyo',
    'Sangolquí',
    'Daule',
    'Latacunga',
    'Tulcán',
    'Chone',
    'Pasaje',
    'Santa Rosa',
    'Nueva Loja',
    'Huaquillas',
    'El Carmen',
    'Montecristi',
    'Samborondón',
    'Puerto Francisco de Orellana',
    'Jipijapa',
    'Santa Elena',
    'Otavalo',
    'Cayambe',
    'Buena Fe',
    'Ventanas',
    'Velasco Ibarra',
    'La Troncal',
    'El Triunfo',
    'Salinas',
    'General Villamil',
    'Azogues',
    'Puyo',
    'Vinces',
    'La Concordia',
    'Rosa Zárate',
    'Balzar',
    'Naranjito',
    'Naranjal',
    'Guaranda',
    'La Maná',
    'Tena',
    'San Lorenzo',
    'Catamayo',
    'El Guabo',
    'Pedernales',
    'Atuntaqui',
    'Bahía de Caráquez',
    'Pedro Carbo',
    'Macas',
    'Yaguachi',
    'Calceta',
    'Arenillas',
    'Jaramijó',
    'Valencia',
    'Machachi',
    'Shushufindi',
    'Atacames',
    'Piñas',
    'San Gabriel',
    'Gualaceo',
    'Lomas de Sargentillo',
    'Cañar',
    'Cariamanga',
    'Baños de Agua Santa',
    'Montalvo',
    'Macará',
    'San Miguel de Salcedo',
    'Zamora',
    'Puerto Ayora',
    'La Joya de los Sachas',
    'Salitre',
    'Tosagua',
    'Pelileo',
    'Pujilí',
    'Tabacundo',
    'Puerto López',
    'San Vicente',
    'Santa Ana',
    'Zaruma',
    'Balao',
    'Rocafuerte',
    'Yantzaza',
    'Cotacachi',
    'Santa Lucía',
    'Cumandá',
    'Palestina',
    'Alfredo Baquerizo Moreno',
    'Nobol',
    'Mocache',
    'Puebloviejo',
    'Portovelo',
    'Sucúa',
    'Guano',
    'Píllaro',
    'Simón Bolívar',
    'Gualaquiza',
    'Paute',
    'Saquisilí',
    'Cnel. Marcelino Maridueña',
    'Paján',
    'San Miguel',
    'Puerto Baquerizo Moreno',
    'Catacocha',
    'Palenque',
    'Alausí',
    'Caluma',
    'Catarama',
    'Flavio Alfaro',
    'Colimes',
    'Echeandía',
    'Jama',
    'Gral. Antonio Elizalde (Bucay)',
    'Isidro Ayora',
    'Muisne',
    'Santa Isabel',
    'Pedro Vicente Maldonado',
    'Biblián',
    'Archidona',
    'Junín',
    'Baba',
    'Valdez (Limones)',
    'Pimampiro',
    'Camilo Ponce Enríquez',
    'San Miguel de Los Bancos',
    'El Tambo',
    'Quinsaloma',
    'El Ángel',
    'Alamor',
    'Chambo',
    'Chimbo',
    'Celica',
    'Chordeleg',
    'Balsas',
    'Saraguro',
    'El Chaco',
    'Girón',
    'Huaca',
    'Pichincha',
    'Chunchi',
    'Pallatanga',
    'Marcabelí',
    'Sígsig',
    'Gral. Leonidas Plaza Gutiérrez (Limón)',
    'Urcuquí',
    'Loreto',
    'Rioverde',
    'Zumba',
    'Palora',
    'Mira',
    'El Pangui',
    'Puerto Quito',
    'Bolívar',
    'Sucre',
    'Chillanes',
    'Quero',
    'Guamote',
    'Cevallos',
    'Zapotillo',
    'Villa La Unión (Cajabamba)',
    'Santiago de Méndez',
    'Zumbi',
    'Puerto El Carmen de Putumayo',
    'Patate',
    'Olmedo',
    'Puerto Villamil',
    'El Dorado de Cascales',
    'Lumbaqui',
    'Palanda',
    'Sigchos',
    'Pindal',
    'Guayzimi',
    'Baeza',
    'El Corazón',
    'Paccha',
    'Amaluza',
    'Las Naves',
    'Logroño',
    'San Fernando',
    'Gonzanamá',
    'San Juan Bosco',
    'Yacuambi',
    'Santa Clara',
    'Arajuno',
    'Tarapoa',
    'Tisaleo',
    'Suscal',
    'Nabón',
    'Mocha',
    'La Victoria',
    'Guachapala',
    'Santiago',
    'Chaguarpamba',
    'Penipe',
    'Taisha',
    'Chilla',
    'Paquisha',
    'Carlos Julio Arosemena Tola',
    'Sozoranga',
    'Pucará',
    'Huamboya',
    'Quilanga',
    'Oña',
    'Sevilla de Oro',
    'Mera',
    'Pablo Sexto',
    'Olmedo',
    'Déleg',
    'La Bonita',
    'El Pan',
    'Tiputini',
]