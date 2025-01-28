# infoApp

# Informe de Avance: Fase de Distribución y Pruebas Finales

## Estado Actual

En la última fase del proyecto, se completó la integración del frontend y el backend. Ambas partes están desplegadas en la infraestructura de AWS. La aplicación utiliza distribución de rutas mediante VPS (Amazon EC2) para manejar todos los formatos de archivos requeridos. Esto asegura **escalabilidad, estabilidad y rendimiento**.

### Notas importantes
1. **Rutas no configuradas**: Actualmente, la información aún no se visualiza porque no se han generado completamente las rutas de VPS necesarias para cada formato de archivo.
2. **Retraso técnico**: El trabajo adicional en las rutas por formato generó un ligero retraso.
3. **Uso de AWS como respaldo**: La información local cuenta con un respaldo en los servicios de AWS.

---

## Pasos Técnicos Críticos

1. **Configuración de Rutas Específicas**
   - Crear rutas personalizadas para videos, documentos y audios en instancias EC2.
   - Configurar reglas de reescritura y redirección para optimizar el acceso a los archivos.

2. **Sincronización entre Servicios**
   - Integrar las rutas de VPS con los endpoints del backend y frontend.
   - Configurar Load Balancers en AWS para distribuir equitativamente las solicitudes.

3. **Pruebas de Conectividad**
   - Garantizar el acceso sin interrupciones bajo condiciones de alta carga.
   - Implementar monitoreo en tiempo real con AWS CloudWatch.

4. **Roles y Permisos**
   - Establecer permisos en S3 y EC2 para garantizar acceso seguro.

---

## Acciones Realizadas

1. **Despliegue**
   - Integración completa del frontend y backend en AWS.
   - Configuración de rutas para manejo de multimedia y bases de datos.

2. **Infraestructura AWS**
   - Uso de buckets S3 para almacenamiento seguro.
   - Instancias EC2 y Amazon Amplify configuradas para el despliegue del frontend.
   - Base de datos PostgreSQL configurada en Amazon RDS.

3. **Optimización**
   - Ajustes en rutas de archivos y sincronización de servicios.

4. **Pruebas**
   - Validación de comunicación entre componentes y roles de usuario.

---

## Próximos Pasos

1. **Pruebas de Carga**
   - Validar estabilidad con computadores periféricos de votación el 31 de enero de 2025.

2. **Ajustes Finales**
   - Implementar cambios derivados de las pruebas de carga.

3. **Documentación**
   - Completar documentación técnica y generar reportes finales.
