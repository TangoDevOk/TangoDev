# Configuración de EmailJS

## Pasos para configurar EmailJS en el proyecto

### 1. Instalar EmailJS
```bash
npm install @emailjs/browser
```

### 2. Crear cuenta en EmailJS
1. Ve a [EmailJS.com](https://www.emailjs.com/)
2. Crea una cuenta gratuita
3. Verifica tu email

### 3. Configurar Email Service
1. En el dashboard de EmailJS, ve a "Email Services"
2. Haz clic en "Add New Service"
3. Selecciona tu proveedor de email (Gmail, Outlook, etc.)
4. Conecta tu cuenta de email
5. Anota el **Service ID** que se genera

### 4. Crear Email Template
1. Ve a "Email Templates"
2. Haz clic en "Create New Template"
3. Usa este template como base:

```html
<!DOCTYPE html>
<html>
<head>
    <title>Nuevo Mensaje de Contacto - TangoDev</title>
</head>
<body>
    <h2>Nuevo Mensaje de Contacto</h2>
    
    <h3>Información del Cliente:</h3>
    <p><strong>Nombre:</strong> {{from_name}}</p>
    <p><strong>Email:</strong> {{from_email}}</p>
    <p><strong>Teléfono:</strong> {{phone}}</p>
    <p><strong>Servicio de Interés:</strong> {{service}}</p>
    
    <h3>Mensaje:</h3>
    <p>{{message}}</p>
    
    <hr>
    <p><em>Este mensaje fue enviado desde el formulario de contacto de TangoDev</em></p>
</body>
</html>
```

4. Guarda el template y anota el **Template ID**

### 5. Obtener Public Key
1. Ve a "Account" en el dashboard
2. En la sección "API Keys", copia tu **Public Key**

### 6. Configurar en el proyecto
1. Abre el archivo `src/utils/emailjs.js`
2. Reemplaza los valores de configuración:

```javascript
export const EMAILJS_CONFIG = {
  SERVICE_ID: 'tu_service_id_aqui',
  TEMPLATE_ID: 'tu_template_id_aqui', 
  PUBLIC_KEY: 'tu_public_key_aqui',
};
```

### 7. Variables del Template
El formulario envía estas variables al template:
- `{{from_name}}` - Nombre del cliente
- `{{from_email}}` - Email del cliente
- `{{phone}}` - Teléfono (opcional)
- `{{service}}` - Servicio seleccionado
- `{{message}}` - Mensaje del cliente

### 8. Probar el formulario
1. Ejecuta el proyecto: `npm run dev`
2. Ve a la sección de contacto
3. Llena el formulario y envíalo
4. Verifica que recibas el email

## Características implementadas

### ✅ Validación de formulario
- Validación de nombre (mínimo 2 caracteres)
- Validación de email (formato válido)
- Validación de mensaje (mínimo 10 caracteres)
- Mensajes de error en tiempo real

### ✅ Estados del formulario
- Estado de carga durante el envío
- Mensajes de éxito/error
- Limpieza automática del formulario después del envío exitoso

### ✅ Manejo de errores
- Captura de errores de EmailJS
- Mensajes de error amigables para el usuario
- Logs de error en consola para debugging

## Notas importantes

- **Plan gratuito**: EmailJS permite 200 emails por mes en el plan gratuito
- **Rate limiting**: Hay límites de envío para evitar spam
- **Seguridad**: Nunca expongas tu Private Key en el frontend
- **Testing**: Siempre prueba en desarrollo antes de desplegar

## Solución de problemas

### Error: "Service not found"
- Verifica que el Service ID sea correcto
- Asegúrate de que el servicio esté activo en EmailJS

### Error: "Template not found"
- Verifica que el Template ID sea correcto
- Asegúrate de que el template esté publicado

### Error: "Invalid public key"
- Verifica que el Public Key sea correcto
- Asegúrate de que la cuenta esté verificada

### No se reciben emails
- Verifica la carpeta de spam
- Revisa la configuración del servicio de email
- Verifica los logs en el dashboard de EmailJS
