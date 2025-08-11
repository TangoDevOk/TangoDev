import emailjs from '@emailjs/browser';

// Configuración de EmailJS
export const EMAILJS_CONFIG = {
  SERVICE_ID: 'YOUR_SERVICE_ID', // Reemplazar con tu Service ID de EmailJS
  TEMPLATE_ID: 'YOUR_TEMPLATE_ID', // Reemplazar con tu Template ID de EmailJS
  PUBLIC_KEY: 'YOUR_PUBLIC_KEY', // Reemplazar con tu Public Key de EmailJS
};

// Función para enviar email usando EmailJS
export const sendEmail = async (formData) => {
  try {
    const response = await emailjs.send(
      EMAILJS_CONFIG.SERVICE_ID,
      EMAILJS_CONFIG.TEMPLATE_ID,
      {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        phone: formData.phone || '',
      },
      EMAILJS_CONFIG.PUBLIC_KEY
    );

    return {
      success: true,
      message: 'Mensaje enviado exitosamente!',
      data: response
    };
  } catch (error) {
    console.error('Error sending email:', error);
    return {
      success: false,
      message: 'Error al enviar el mensaje. Por favor, intenta nuevamente.',
      error: error
    };
  }
};

// Función para validar el formulario
export const validateForm = (formData) => {
  const errors = {};

  if (!formData.name || formData.name.trim().length < 2) {
    errors.name = 'El nombre debe tener al menos 2 caracteres';
  }

  if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
    errors.email = 'Por favor, ingresa un email válido';
  }

  if (!formData.subject || formData.subject.trim().length < 5) {
    errors.subject = 'El asunto debe tener al menos 5 caracteres';
  }

  if (!formData.message || formData.message.trim().length < 10) {
    errors.message = 'El mensaje debe tener al menos 10 caracteres';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};
