export const defaultBeneficiary = {
    last_name: '',
    first_name: '',
    identification: '',
    birth_date: '',
    age: '',
    gender: '',
    place_of_birth: '',
    height: '',
    weight: '',
    identification_type: 'V'
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
    identification_type: 'V'
}

export const invoiceInformationDefault = {
    is_customer: '',
    business_name: '',
    ruc: '',
    email: '',
    phone: '',
    identifier: '',
    address: '',
    type_identifier: ''
}

export const defaultUser = {
    firstName: "",
    lastName: "",
    email: "",
    contactPhone: "",
    birthDate: "",
    password: "",
    identifier: ""
}

export const beneficiaries = [
    defaultBeneficiary
]

export const requirementsText = `
    <p class="mb-2">El cliente deberá remitir a SAFEWAY las siguiente documentación:</p>
    <ol class="list-decimal ml-10">
        <li class="mb-2">Solicitud de acceso a la presentación del servicio de asistencia.</li>
        <li class="mb-2">Copia del primer reclamo presentado a la compañía de seguros.</li>
        <li class="mb-2">Carta de garantía hospitalaria emitida por la respectiva compañía de seguros.</li>
    </ol>
    <p class="mt-2">*Nota: el servicio de asistencia se prestará siempre y cuando se cumplan todas las condiciones establecidas en las cláusulas V del contrato.</p>
`

export const termsText = `
<ol class="list-decimal">
    <li class="mb-2">El servicio de asistencia de prestará solo y exclusivamente para viajes al exterior que tengan por objeto principal llevar acabo una cirugía, operación o procedimiento quirúrgico necesario para el tratamiento de las enfermedades críticas que constan detalladas en el anexo IV que requieran de hospitalización en hospitales y clínicas legalmente reconocidas por un periodo de 24 horas o mas. La cirugía que se limite a hospital del día o sea menor a 24 horas, al ser una cirugía ambulatoria, no aplicará para el servicio de asistencia.</li>
    <li class="mb-2">No aplica para viajes al exterior que tengan por objeto consultas médicas, obtención de segundas opiniones médicas, chequeos de control posteriores a una cirugía o tratamiento médico, tratamientos ambulatorios excepto por lo relativo a la quimioterapia, radioterapia y diálisis, ni para cirugías preventivas, cirugías estéticas y cirugías relacionadas o derivadas del tratamiento de enfermedades mentales.</li>
    <li class="mb-2">La enfermedad crítica debera ser diagnosticada por primera vez luego de transcurridos 90 dias de emisión del contrato, excepto en el caso deaccidentes o enfermedades infecciosas.</li>
    <li class="mb-2">El beneficiario deberá contar con un seguro médico con cobertura internacional activo al momento de solicitar el servicio.</li>
    <li class="mb-2">El cliente notificará por escrito a SAFEWAY con al menos cinco (5) días habiles de anticipación a la fecha en la que se produzca el viaje al exterior para el tratamiento de enfermedad crítica.</li>
    <li class="mb-2">El beneficiario deberá trasladarse necesariamente desde Ecuador a cualquier otro país del continente americano para el tratamiento de la enfermedad crítica.</li>
    <li class="mb-2">El servicio de asistencia se prestará por una sola vez por beneficiario y por enfermedad durante la vigencia del contrato y cualquiera de sus renovaciones. No obstante, el servicio se podrá prestar para el mismo beneficiario para el tratamiento en el exterior de las otras enfermedades críticas.</li>
    <li class="mb-2">El cliente deberá estar al día en sus pagos al momento de solicitar la prestación del servicio.</li>
</ol>    
<p>*El servicio de asistencia se prestará siempre y cuando se cumplan todas las condiciones establecidas en la cláusula cuarta del contrato.</p>
`

export const benefitText = `
<p class="mb-2">Una vez que SAFEWAY verifique que se cumple todas las condiciones y requisitos del contrato, se llevará a cabo el siguiente procedimiento:</p>
<ol class="list-decimal ml-10">
    <li class="mb-2">El cliente enviará a SAFEWAY el formulario de confirmación de viaje al exterior en el que constará la información del beneficiario que viajará a atenderse, al igual que la de el/los acompañantes que viajarán, así como las fechas del viaje, dirección del hospital, datos para la reserva del hotel y vehículos, etc.</li>
    <li class="mb-2">Una vez recibido dicho formulario, SAFEWAY gestionará la reserva de los vuelos, hotel y vehículo de acuerdo a las características del plan contratado por el cliente y en función a las fechas de viaje facilitadas por este.</li>
    <li class="mb-2">Una vez recibido dicho formulario, SAFEWAY gestionará la reserva de los vuelos, hotel y vehículo de acuerdo a las características del plan contratado por el cliente y en función a las fechas de viaje facilitadas por este.</li>
</ol>
<p class="mt-2">*El servicio de asistencia se prestará de acuerdo a lo estipulado en la cláusula VI del contrato.</p>
`

export const multiTrips = `
<ol class="list-decimal">
    <li class="mb-2">El servicio de asistencia se prestará para un máximo de tres viajes por beneficiario y por enfermedad durante la vigencia del contrato Aplica un viaje por beneficiario y por enfermedad por cada periodo de doce (12) meses hasta el máximo de viajes establecidos en el presente anexo.</li>
    <li class="mb-2">El servicio de asistencia se prestará única y exclusivamente para viajes al exterior que tenga por objeto principal llevar a cabo una cirugía, operación o procedimiento quirúrgico necesario para el tratamiento de las enfermedades críticas que constan detalladas en el Anexo IV que requieran de hospitalización en hospitales y clínicas legalmente reconocidas por un periodo de 24 horas o más. La cirugía que se limite a hostial del día o sea menor a 24 horas, al ser una cirugía ambulatoria, no aplicará para el servicio de asistencia.</li>
    <li class="mb-2">No aplica para viajes al exterior que tengan por objeto consultas médicas, obtención de segundas opciones médicas, chequeos de control posteriores a una cirugía o tratamiento médico, tratamientos ambulatorios excepto por lo relativo a la quimioterapia, radioterapia y diálisis, ni para cirugías preventivas, cirugías estéticas y cirugías relacionadas o derivadas del tratamiento de enfermedades mentales.</li>
</ol>
`
export const illnessesaAndAccidents = `
<ol class="list-decimal">
    <li class="mb-2">Se entenderá por enfermedad una alteración o desviación del estado fisiológico en una o varias partes del cuerpo, por causas en general conocidas, manifestadas por síntomas y signos característicos, y cuya evolución es más o menos previsible. Se entenderá por accidente todo suceso repentino e imprevisto que ocurra dentro del plazo del contrato que resulte en lesión corporal, cuya causa o una de cuyas causas, se externan al cuerpo de la víctima y fuera del control de la misma.</li>
    <li class="mb-2">El servicio de asistencia se prestará única y exclusivamente para viajes al exterior que tenga por objeto principal llevar a cabo una cirugía, operación o procedimiento quirúrgico necesario para el tratamiento de las enfermedades críticas que constan detalladas en el Anexo IV que requieran de hospitalización en hospitales y clínicas legalmente reconocidas por un periodo de 24 horas o más. La cirugía que se limite a hostial del día o sea menor a 24 horas, al ser una cirugía ambulatoria, no aplicará para el servicio de asistencia.</li>
    <li class="mb-2">No aplica para viajes al exterior que tengan por objeto consultas médicas, obtención de segundas opciones médicas, chequeos de control posteriores a una cirugía o tratamiento médico, tratamientos ambulatorios excepto por lo relativo a la quimioterapia, radioterapia y diálisis, ni para cirugías preventivas, cirugías estéticas y cirugías relacionadas o derivadas del tratamiento de enfermedades mentales.</li>
</ol>
`