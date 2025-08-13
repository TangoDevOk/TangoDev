import emailjs from '@emailjs/browser';

// Configuración de EmailJS
export const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_jy30k4w', // Service ID de EmailJS
  TEMPLATES: {
    CONTACT: 'template_ep9zoqc', // Template para formulario de contacto (más orientado a consultas)
    QUOTE: 'template_ep9zoqc', // Template para solicitudes de cotización
    PRICING: 'template_wcjunas', // Template para consultas de pricing (con información del plan)
  },
  PUBLIC_KEY: 'qh9gEflQcEoNQntav', // Public Key de EmailJS
};

// Inicializar EmailJS
export const initEmailJS = () => {
  emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
};

// Función para enviar email de contacto
export const sendContactEmail = async (formData) => {
  try {
    const response = await emailjs.send(
      EMAILJS_CONFIG.SERVICE_ID,
      EMAILJS_CONFIG.TEMPLATES.CONTACT,
      {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone || 'No proporcionado',
        service: formData.service || 'No especificado',
        budget: formData.budget || 'No especificado',
        message: formData.message,
        // Variables adicionales que podrían estar en el template
        name: formData.name,
        email: formData.email,
        title: formData.service || 'Consulta general',
      },
      EMAILJS_CONFIG.PUBLIC_KEY
    );

    return {
      success: true,
      message: '¡Mensaje enviado exitosamente! Te contactaremos pronto.',
      data: response
    };
  } catch (error) {
    console.error('Error sending contact email:', error);
    return {
      success: false,
      message: 'Error al enviar el mensaje. Por favor, intenta nuevamente.',
      error: error
    };
  }
};

// Función para enviar email de cotización
export const sendQuoteEmail = async (formData) => {
  try {
    const response = await emailjs.send(
      EMAILJS_CONFIG.SERVICE_ID,
      EMAILJS_CONFIG.TEMPLATES.QUOTE,
      {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone || 'No proporcionado',
        plan: formData.plan || 'No especificado',
        budget: formData.budget || 'No especificado',
        timeline: formData.timeline || 'No especificado',
        project_details: formData.project_details || formData.message,
        // Variables adicionales para compatibilidad
        name: formData.name,
        email: formData.email,
        message: formData.project_details || formData.message,
        service: formData.plan || 'Cotización',
        title: `Cotización - ${formData.plan || 'Plan personalizado'}`,
      },
      EMAILJS_CONFIG.PUBLIC_KEY
    );

    return {
      success: true,
      message: '¡Solicitud de cotización enviada! Te contactaremos con una propuesta personalizada.',
      data: response
    };
  } catch (error) {
    console.error('Error sending quote email:', error);
    return {
      success: false,
      message: 'Error al enviar la solicitud. Por favor, intenta nuevamente.',
      error: error
    };
  }
};

// Función para enviar email de consulta de precios (usa el template de pricing)
export const sendPricingEmail = async (formData) => {
  try {
    const response = await emailjs.send(
      EMAILJS_CONFIG.SERVICE_ID,
      EMAILJS_CONFIG.TEMPLATES.PRICING, // Usar el template de pricing
      {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone || 'No proporcionado',
        service: `Plan solicitado: ${formData.selected_plan || 'No especificado'}`,
        message: formData.project_details || `Consulta sobre el plan ${formData.selected_plan || 'seleccionado'}`,
        // Variables específicas para el template de pricing
        name: formData.name,
        email: formData.email,
        plan: formData.selected_plan || 'No especificado',
        title: `Consulta de Plan - ${formData.selected_plan || 'Plan'}`,
        // Información adicional del plan
        plan_details: formData.project_details || 'Consulta general sobre el plan',
        budget: formData.budget || 'No especificado',
        timeline: formData.timeline || 'No especificado',
        // Información adicional del proyecto
        project_details: formData.project_details || 'No especificado',
        selected_plan: formData.selected_plan || 'No especificado',
      },
      EMAILJS_CONFIG.PUBLIC_KEY
    );

    return {
      success: true,
      message: '¡Consulta enviada! Te enviaremos información detallada sobre el plan seleccionado.',
      data: response
    };
  } catch (error) {
    console.error('Error sending pricing email:', error);
    return {
      success: false,
      message: 'Error al enviar la consulta. Por favor, intenta nuevamente.',
      error: error
    };
  }
};

// Función genérica para enviar email
export const sendEmail = async (formData, templateType = 'CONTACT') => {
  switch (templateType) {
    case 'QUOTE':
      return await sendQuoteEmail(formData);
    case 'PRICING':
      return await sendPricingEmail(formData);
    case 'CONTACT':
    default:
      return await sendContactEmail(formData);
  }
};

// Función para validar el formulario de contacto
export const validateContactForm = (formData) => {
  const errors = {};

  if (!formData.name || formData.name.trim().length < 2) {
    errors.name = 'El nombre debe tener al menos 2 caracteres';
  }

  if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
    errors.email = 'Por favor, ingresa un email válido';
  }

  if (!formData.message || formData.message.trim().length < 10) {
    errors.message = 'El mensaje debe tener al menos 10 caracteres';
  }

  // Validación opcional del teléfono
  if (formData.phone && !/^[\+]?[0-9\s\-\(\)]{8,}$/.test(formData.phone)) {
    errors.phone = 'Por favor, ingresa un número de teléfono válido';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};

// Función para validar el formulario de cotización
export const validateQuoteForm = (formData) => {
  const errors = {};

  if (!formData.name || formData.name.trim().length < 2) {
    errors.name = 'El nombre debe tener al menos 2 caracteres';
  }

  if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
    errors.email = 'Por favor, ingresa un email válido';
  }

  if (!formData.project_details || formData.project_details.trim().length < 20) {
    errors.project_details = 'Por favor, describe tu proyecto con más detalle (mínimo 20 caracteres)';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};

// Función para validar el formulario de precios
export const validatePricingForm = (formData) => {
  const errors = {};

  if (!formData.name || formData.name.trim().length < 2) {
    errors.name = 'El nombre debe tener al menos 2 caracteres';
  }

  if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
    errors.email = 'Por favor, ingresa un email válido';
  }

  if (!formData.selected_plan) {
    errors.selected_plan = 'Por favor, selecciona un plan';
  }

  if (!formData.project_details || formData.project_details.trim().length < 20) {
    errors.project_details = 'Por favor, describe tu proyecto con más detalle (mínimo 20 caracteres)';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};

// Función genérica para validar formularios
export const validateForm = (formData, formType = 'CONTACT') => {
  switch (formType) {
    case 'QUOTE':
      return validateQuoteForm(formData);
    case 'PRICING':
      return validatePricingForm(formData);
    case 'CONTACT':
    default:
      return validateContactForm(formData);
  }
};
