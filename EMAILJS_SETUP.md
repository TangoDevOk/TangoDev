# Configuración de EmailJS para TangoDev

## 📧 Templates de Email Mejorados

### 1. Template: `template_wcjunas` (Formulario de Contacto)

**Nombre en EmailJS:** "Contact Us"

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nueva Consulta - TangoDev</title>
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: #333;
            margin: 0;
            padding: 0;
            background-color: #f8f9fa;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
        }
        .header {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 40px 30px;
            text-align: center;
        }
        .logo {
            font-size: 28px;
            font-weight: bold;
            margin-bottom: 10px;
            letter-spacing: 1px;
        }
        .header h1 {
            margin: 0 0 10px 0;
            font-size: 24px;
            font-weight: 600;
        }
        .header p {
            margin: 0;
            opacity: 0.9;
            font-size: 16px;
        }
        .content {
            padding: 40px 30px;
        }
        .section {
            margin-bottom: 40px;
        }
        .section:last-child {
            margin-bottom: 0;
        }
        .section-title {
            font-size: 20px;
            font-weight: 600;
            color: #2d3748;
            margin-bottom: 20px;
            padding-bottom: 10px;
            border-bottom: 3px solid #667eea;
            position: relative;
        }
        .section-title::before {
            content: '';
            position: absolute;
            left: 0;
            bottom: -3px;
            width: 50px;
            height: 3px;
            background: linear-gradient(90deg, #667eea, #764ba2);
        }
        .info-grid {
            display: grid;
            gap: 15px;
        }
        .info-item {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 15px 20px;
            background-color: #f8f9fa;
            border-radius: 8px;
            border-left: 4px solid #667eea;
        }
        .info-label {
            font-weight: 600;
            color: #4a5568;
            min-width: 120px;
        }
        .info-value {
            color: #2d3748;
            text-align: right;
            word-break: break-word;
        }
        .info-value a {
            color: #667eea;
            text-decoration: none;
        }
        .message-section {
            background-color: #f8f9fa;
            border-radius: 8px;
            padding: 20px;
            border-left: 4px solid #48bb78;
        }
        .message-title {
            font-size: 18px;
            font-weight: 600;
            color: #2d3748;
            margin-bottom: 15px;
        }
        .message-content {
            background-color: white;
            padding: 20px;
            border-radius: 6px;
            border: 1px solid #e2e8f0;
            white-space: pre-wrap;
            line-height: 1.7;
        }
        .footer {
            background-color: #2d3748;
            color: white;
            padding: 30px;
            text-align: center;
        }
        .footer p {
            margin: 0 0 10px 0;
            opacity: 0.8;
        }
        .footer p:last-child {
            margin-bottom: 0;
            font-weight: 600;
            color: #667eea;
        }
        .priority-badge {
            display: inline-block;
            background: linear-gradient(135deg, #48bb78, #38a169);
            color: white;
            padding: 8px 16px;
            border-radius: 20px;
            font-size: 14px;
            font-weight: 600;
            margin-top: 15px;
        }
        @media (max-width: 600px) {
            .container {
                margin: 10px;
                border-radius: 8px;
            }
            .header, .content, .footer {
                padding: 20px 15px;
            }
            .info-item {
                flex-direction: column;
                align-items: flex-start;
                gap: 5px;
            }
            .info-value {
                text-align: left;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <div class="logo">TangoDev</div>
            <h1>Nueva Consulta Recibida</h1>
            <p>Un potencial cliente se ha puesto en contacto contigo</p>
            <div class="priority-badge">ALTA PRIORIDAD</div>
        </div>
        
        <div class="content">
            <div class="section">
                <h2 class="section-title">Información del Cliente</h2>
                <div class="info-grid">
                    <div class="info-item">
                        <span class="info-label">NOMBRE:</span>
                        <span class="info-value">{{from_name}}</span>
                    </div>
                    <div class="info-item">
                        <span class="info-label">EMAIL:</span>
                        <span class="info-value"><a href="mailto:{{from_email}}">{{from_email}}</a></span>
                    </div>
                    <div class="info-item">
                        <span class="info-label">TELÉFONO:</span>
                        <span class="info-value">{{phone}}</span>
                    </div>
                    <div class="info-item">
                        <span class="info-label">SERVICIO:</span>
                        <span class="info-value">{{service}}</span>
                    </div>
                    <div class="info-item">
                        <span class="info-label">PRESUPUESTO:</span>
                        <span class="info-value">{{budget}}</span>
                    </div>
                </div>
            </div>
            
            <div class="section">
                <div class="message-section">
                    <h3 class="message-title">Mensaje del Cliente</h3>
                    <div class="message-content">
                        {{message}}
                    </div>
                </div>
            </div>
        </div>
        
        <div class="footer">
            <p>Este mensaje fue enviado desde el formulario de contacto de TangoDev</p>
            <p>Responde pronto para no perder esta oportunidad de negocio</p>
        </div>
    </div>
</body>
</html>
```

### 2. Template: `template_ep9zoqc` (Solicitud de Cotización)

**Nombre en EmailJS:** "Quote Request"

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Solicitud de Cotización - TangoDev</title>
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: #333;
            margin: 0;
            padding: 0;
            background-color: #f8f9fa;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
        }
        .header {
            background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
            color: white;
            padding: 40px 30px;
            text-align: center;
        }
        .logo {
            font-size: 28px;
            font-weight: bold;
            margin-bottom: 10px;
            letter-spacing: 1px;
        }
        .header h1 {
            margin: 0 0 10px 0;
            font-size: 24px;
            font-weight: 600;
        }
        .header p {
            margin: 0;
            opacity: 0.9;
            font-size: 16px;
        }
        .plan-badge {
            display: inline-block;
            background: rgba(255, 255, 255, 0.2);
            color: white;
            padding: 8px 16px;
            border-radius: 20px;
            font-size: 14px;
            font-weight: 600;
            margin-top: 15px;
            border: 1px solid rgba(255, 255, 255, 0.3);
        }
        .content {
            padding: 40px 30px;
        }
        .section {
            margin-bottom: 40px;
        }
        .section:last-child {
            margin-bottom: 0;
        }
        .section-title {
            font-size: 20px;
            font-weight: 600;
            color: #2d3748;
            margin-bottom: 20px;
            padding-bottom: 10px;
            border-bottom: 3px solid #f093fb;
            position: relative;
        }
        .section-title::before {
            content: '';
            position: absolute;
            left: 0;
            bottom: -3px;
            width: 50px;
            height: 3px;
            background: linear-gradient(90deg, #f093fb, #f5576c);
        }
        .info-grid {
            display: grid;
            gap: 15px;
        }
        .info-item {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 15px 20px;
            background-color: #f8f9fa;
            border-radius: 8px;
            border-left: 4px solid #f093fb;
        }
        .info-label {
            font-weight: 600;
            color: #4a5568;
            min-width: 120px;
        }
        .info-value {
            color: #2d3748;
            text-align: right;
            word-break: break-word;
        }
        .info-value a {
            color: #f093fb;
            text-decoration: none;
        }
        .project-section {
            background-color: #f8f9fa;
            border-radius: 8px;
            padding: 20px;
            border-left: 4px solid #48bb78;
        }
        .project-title {
            font-size: 18px;
            font-weight: 600;
            color: #2d3748;
            margin-bottom: 15px;
        }
        .project-content {
            background-color: white;
            padding: 20px;
            border-radius: 6px;
            border: 1px solid #e2e8f0;
            white-space: pre-wrap;
            line-height: 1.7;
        }
        .budget-timeline {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 15px;
            margin-top: 20px;
        }
        .budget-item, .timeline-item {
            background-color: white;
            padding: 15px;
            border-radius: 6px;
            border: 1px solid #e2e8f0;
            text-align: center;
        }
        .budget-label, .timeline-label {
            font-size: 12px;
            color: #718096;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            margin-bottom: 5px;
        }
        .budget-value, .timeline-value {
            font-size: 16px;
            font-weight: 600;
            color: #2d3748;
        }
        .footer {
            background-color: #2d3748;
            color: white;
            padding: 30px;
            text-align: center;
        }
        .footer p {
            margin: 0 0 10px 0;
            opacity: 0.8;
        }
        .footer p:last-child {
            margin-bottom: 0;
            font-weight: 600;
            color: #f093fb;
        }
        .priority-badge {
            display: inline-block;
            background: linear-gradient(135deg, #f093fb, #f5576c);
            color: white;
            padding: 8px 16px;
            border-radius: 20px;
            font-size: 14px;
            font-weight: 600;
            margin-top: 15px;
        }
        @media (max-width: 600px) {
            .container {
                margin: 10px;
                border-radius: 8px;
            }
            .header, .content, .footer {
                padding: 20px 15px;
            }
            .info-item {
                flex-direction: column;
                align-items: flex-start;
                gap: 5px;
            }
            .info-value {
                text-align: left;
            }
            .budget-timeline {
                grid-template-columns: 1fr;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <div class="logo">TangoDev</div>
            <h1>Solicitud de Cotización</h1>
            <p>Un cliente está interesado en nuestros servicios</p>
            <div class="plan-badge">Plan: {{plan}}</div>
            <div class="priority-badge">COTIZACIÓN URGENTE</div>
        </div>
        
        <div class="content">
            <div class="section">
                <h2 class="section-title">Información del Cliente</h2>
                <div class="info-grid">
                    <div class="info-item">
                        <span class="info-label">NOMBRE:</span>
                        <span class="info-value">{{from_name}}</span>
                    </div>
                    <div class="info-item">
                        <span class="info-label">EMAIL:</span>
                        <span class="info-value"><a href="mailto:{{from_email}}">{{from_email}}</a></span>
                    </div>
                    <div class="info-item">
                        <span class="info-label">TELÉFONO:</span>
                        <span class="info-value">{{phone}}</span>
                    </div>
                    <div class="info-item">
                        <span class="info-label">PLAN SELECCIONADO:</span>
                        <span class="info-value">{{plan}}</span>
                    </div>
                </div>
            </div>
            
            <div class="section">
                <h2 class="section-title">Detalles del Proyecto</h2>
                <div class="project-section">
                    <h3 class="project-title">Descripción del Proyecto</h3>
                    <div class="project-content">
                        {{project_details}}
                    </div>
                    
                                         <div class="budget-timeline">
                         <div class="budget-item">
                             <div class="budget-label">Precio Seleccionado</div>
                             <div class="budget-value">{{budget}}</div>
                         </div>
                         <div class="timeline-item">
                             <div class="timeline-label">Timeline Deseado</div>
                             <div class="timeline-value">{{timeline}}</div>
                         </div>
                     </div>
                </div>
            </div>
        </div>
        
        <div class="footer">
            <p>Esta solicitud fue enviada desde la sección de precios de TangoDev</p>
            <p>Prepara una propuesta detallada y contacta al cliente lo antes posible</p>
        </div>
    </div>
</body>
</html>
```

## 🔧 Variables Disponibles en cada Template

### Template de Contacto (`template_wcjunas`):
- `{{from_name}}` - Nombre del cliente
- `{{from_email}}` - Email del cliente
- `{{phone}}` - Teléfono del cliente
- `{{service}}` - Servicio de interés
- `{{budget}}` - Presupuesto estimado
- `{{message}}` - Mensaje del cliente

 ### Template de Cotización (`template_ep9zoqc`):
 - `{{from_name}}` - Nombre del cliente
 - `{{from_email}}` - Email del cliente
 - `{{phone}}` - Teléfono del cliente
 - `{{plan}}` - Plan seleccionado
 - `{{budget}}` - Precio seleccionado del plan (texto libre para plan Personalizado)
 - `{{timeline}}` - Timeline deseado
 - `{{project_details}}` - Detalles del proyecto

## 🎨 Características de los Diseños

### **Diseño Responsivo**
- Se adapta perfectamente a dispositivos móviles
- Layout optimizado para diferentes tamaños de pantalla

### **Paleta de Colores**
- **Contacto**: Gradientes azul-morado (#667eea → #764ba2)
- **Cotización**: Gradientes rosa-rojo (#f093fb → #f5576c)
- **Acentos**: Verde para secciones de contenido (#48bb78)

### **Elementos Visuales**
- Badges de prioridad para destacar urgencia
- Bordes laterales coloridos para cada sección
- Sombras y efectos visuales modernos
- Tipografía clara y legible

### **Optimización para Email**
- CSS inline para máxima compatibilidad
- Estructura semántica HTML
- Imágenes y elementos optimizados
- Compatible con todos los clientes de email

## 📋 Pasos para Configurar en EmailJS

1. **Accede a tu dashboard de EmailJS**
2. **Ve a la sección "Email Templates"**
3. **Edita el template "Contact Us" (ID: template_wcjunas)**
4. **Copia y pega el código HTML del primer template**
5. **Edita el template "Quote Request" (ID: template_ep9zoqc)**
6. **Copia y pega el código HTML del segundo template**
7. **Guarda ambos templates**

## ✅ Verificación

Después de configurar los templates:
1. Prueba el formulario de contacto
2. Prueba el modal de cotización (especialmente el plan Personalizado)
3. Verifica que los emails lleguen con el formato correcto
4. Confirma que todas las variables se muestren correctamente

 ## 💰 Precios Disponibles por Plan
 
 ### **Plan Básico:**
 - $500.000 (sin hosting)
 - $800.000 (con hosting)
 
 ### **Plan Medio - E-Commerce:**
 - $924.000 (sin hosting)
 - $1.732.500 (con hosting)
 
 ### **Plan Pro - SaaS / Plataforma a medida:**
 - $3.465.000 (sin hosting)
 - $4.200.000 (con hosting)
 
 ### **Plan Personalizado:**
 - Input de texto libre para precio personalizado
 
 ## 🔧 Configuración Actual
 
 - ✅ **Service ID**: `service_jy30k4w`
 - ✅ **Template Contacto**: `template_wcjunas`
 - ✅ **Template Cotización**: `template_ep9zoqc`
 - ✅ **Public Key**: `qh9gEflQcEoNQntav`
