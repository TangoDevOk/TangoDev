<<<<<<< HEAD
# TangoDev - Agencia de Desarrollo Web

Sitio web profesional para una agencia de desarrollo web que ofrece servicios de diseño, desarrollo, marketing digital y SEO.

## 🚀 Tecnologías Utilizadas

### Frontend
- **React 18** - Biblioteca de JavaScript para interfaces de usuario
- **Vite** - Herramienta de construcción rápida para desarrollo moderno
- **Tailwind CSS** - Framework CSS utility-first para diseño rápido
- **Framer Motion** - Biblioteca de animaciones para React
- **React Router DOM** - Enrutamiento para aplicaciones React
- **Lucide React** - Iconos modernos y consistentes
- **EmailJS** - Integración de formularios de contacto

### Características del Proyecto
- ✅ Diseño responsive y moderno
- ✅ Animaciones suaves con Framer Motion
- ✅ Formulario de contacto funcional con EmailJS
- ✅ Navegación suave entre secciones
- ✅ Optimizado para SEO
- ✅ Código limpio y mantenible
- ✅ Componentes reutilizables

## 🛠️ Instalación y Configuración

1. **Clonar el repositorio**
```bash
git clone <tu-repositorio>
cd tangodev
```

2. **Instalar dependencias**
```bash
npm install
```

3. **Configurar EmailJS (Opcional)**
Para que el formulario de contacto funcione, necesitas configurar EmailJS:
- Crea una cuenta en [EmailJS](https://www.emailjs.com/)
- Obtén tu Service ID, Template ID y Public Key
- Descomenta y configura las líneas en `src/components/Contact.jsx`

4. **Ejecutar en desarrollo**
```bash
npm run dev
```

5. **Construir para producción**
```bash
npm run build
```

## 📁 Estructura del Proyecto

```
src/
├── components/          # Componentes reutilizables
│   ├── Navbar.jsx      # Navegación principal
│   ├── Hero.jsx        # Sección de bienvenida
│   ├── Services.jsx    # Servicios ofrecidos
│   ├── About.jsx       # Información de la empresa
│   ├── Contact.jsx     # Formulario de contacto
│   └── Footer.jsx      # Pie de página
├── assets/             # Imágenes y recursos
├── App.jsx             # Componente principal
├── main.jsx           # Punto de entrada
└── index.css          # Estilos globales con Tailwind
```

## 🎨 Tecnologías Recomendadas para el Backend

### Opción 1: Sin Backend (Recomendado para empezar)
- **EmailJS** - Para formularios de contacto
- **Netlify Forms** - Alternativa gratuita
- **Vercel** - Hosting y formularios
- **Firebase** - Base de datos y autenticación

### Opción 2: Backend Ligero
- **Node.js + Express** - API REST simple
- **MongoDB Atlas** - Base de datos en la nube
- **JWT** - Autenticación
- **Multer** - Manejo de archivos

### Opción 3: Backend Completo
- **Next.js** - Framework full-stack
- **Prisma** - ORM para base de datos
- **PostgreSQL** - Base de datos robusta
- **NextAuth.js** - Autenticación
- **Stripe** - Pagos

## 🔧 Configuración de EmailJS

1. Ve a [EmailJS](https://www.emailjs.com/) y crea una cuenta
2. Crea un nuevo servicio (Gmail, Outlook, etc.)
3. Crea una plantilla de email
4. Obtén las credenciales:
   - Service ID
   - Template ID  
   - Public Key
5. Descomenta y configura en `Contact.jsx`:

```javascript
const result = await emailjs.sendForm(
  'YOUR_SERVICE_ID',
  'YOUR_TEMPLATE_ID',
  formRef.current,
  'YOUR_PUBLIC_KEY'
)
```

## 🚀 Despliegue

### Netlify (Recomendado)
1. Conecta tu repositorio de GitHub
2. Configura el comando de build: `npm run build`
3. Directorio de salida: `dist`
4. Configura variables de entorno si es necesario

### Vercel
1. Instala Vercel CLI: `npm i -g vercel`
2. Ejecuta: `vercel`
3. Sigue las instrucciones

### Firebase Hosting
1. Instala Firebase CLI: `npm i -g firebase-tools`
2. Inicializa: `firebase init hosting`
3. Construye: `npm run build`
4. Despliega: `firebase deploy`

## 📱 Características del Sitio

### Secciones Principales
- **Hero** - Presentación atractiva con call-to-action
- **Servicios** - 6 servicios principales con iconos y descripciones
- **Sobre Nosotros** - Información de la empresa y estadísticas
- **Contacto** - Formulario funcional y información de contacto
- **Footer** - Enlaces, redes sociales y información legal

### Funcionalidades
- Navegación suave entre secciones
- Animaciones al hacer scroll
- Formulario de contacto con validación
- Diseño completamente responsive
- Optimizado para SEO
- Accesibilidad mejorada

## 🎯 Próximos Pasos Recomendados

1. **Configurar EmailJS** para formularios funcionales
2. **Agregar contenido real** (fotos, información de la empresa)
3. **Implementar blog** con Next.js o WordPress
4. **Agregar portafolio** de proyectos
5. **Integrar analytics** (Google Analytics, Hotjar)
6. **Optimizar SEO** con meta tags y sitemap
7. **Implementar chat en vivo** (Tawk.to, Crisp)
8. **Agregar testimonios** de clientes
9. **Crear página de precios** y planes
10. **Implementar blog** para contenido SEO

## 📞 Soporte

Para soporte técnico o consultas sobre el proyecto, contacta a:
- Email: tangodev08@gmail.com
- Teléfono: +54 11 1234-5678

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

---

**TangoDev** - Transformando ideas en realidad digital 🚀
=======
# TangoDev
>>>>>>> 896e1577a5fc38c8a20a709cab2f1dfc63757aea
