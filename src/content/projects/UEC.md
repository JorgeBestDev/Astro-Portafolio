---
title: Universidad Externado de Colombia
description: Software implementado en las salas de especializadas de software de la UEC
img: [UEC main.png, UEC ADMIN.png, UEC PAGE.png, UEC pc's.png, UEC software.png]
tags: [python, flask, javascript, tailwindcss, sockets]
github: EntregableUEC

---

Este proyecto fue entregado a la **Universidad Externado de Colombia** como parte de mis prácticas en **Análisis y Desarrollo de Software**, y fue implementado con éxito en las Salas Especializadas de Software de la institución. Se trata de una solución integral para la gestión del uso de los equipos de cómputo en dichas salas, controlando tanto el acceso como el tiempo de uso por parte de los estudiantes y personal autorizado, así como el registro de los softwares licenciados utilizados por los usuarios.

**Descripción General del Proyecto**
El sistema está diseñado para gestionar los equipos mediante el registro de los usuarios, la activación de los equipos a través de puertos de red, y el control de software licenciado que se utiliza en cada sesión. Además del control de acceso y tiempo de uso, el sistema permite un seguimiento detallado de los programas especializados que requieren licencias, como Adobe CC, SPSS, ARCGIS, entre otros, asegurando el cumplimiento de las políticas de la universidad y la gestión adecuada de los recursos de software.

**Tecnologías y Herramientas Utilizadas**
El desarrollo del proyecto utilizó una pila tecnológica moderna y eficiente, adecuada para aplicaciones web escalables y de alta demanda.

**Python y Flask:** El backend fue desarrollado en Python utilizando el framework **Flask** que permitió la creación de un servidor web eficiente que maneja las solicitudes de los usuarios, controla el registro, la autenticación y la activación de los equipos, así como la gestión del software licenciado. La arquitectura del proyecto sigue el patrón **API REST**, facilitando la integración con otros sistemas y permitiendo futuras expansiones.

**SQLAlchemy:** La gestión de la base de datos se realizó con **SQLAlchemy**, un ORM (Object Relational Mapping) que facilitó la interacción con la base de datos de manera estructurada y segura. Esto permitió manejar no solo las entidades de usuarios y equipos, sino también los registros de software licenciado, lo que garantiza un control adecuado sobre el uso de aplicaciones de pago y licencias en los equipos.

Frontend con HTML5, Tailwind CSS y JavaScript: La interfaz de usuario fue desarrollada utilizando HTML5 y Tailwind CSS, proporcionando un diseño moderno y responsive que se adapta a las necesidades de la universidad. El uso de JavaScript permitió una experiencia interactiva en el frontend, con un control eficiente de la activación de equipos y la gestión de software. Las alertas personalizadas con SweetAlert mejoran la experiencia del usuario, informando de manera visual sobre las acciones completadas, como el inicio de sesión, la activación de equipos o el uso de un software con licencia.

**Registro de Software Licenciado:** Una característica clave de este sistema es el seguimiento del uso de software licenciado por los usuarios. Cada vez que un usuario accede a un equipo y utiliza una aplicación que requiere licencia, el sistema registra esta información en la base de datos. Esto asegura un control total sobre el uso de los recursos de software, permitiendo a la universidad gestionar y optimizar el uso de sus licencias de forma eficiente.

**Activación de Equipos por Puertos:** El sistema también permite la activación remota de los equipos a través de puertos de red. Los equipos permanecen inactivos hasta que un usuario registrado solicita su uso, momento en el cual el sistema activa el equipo automáticamente. Esta funcionalidad asegura la seguridad y la optimización del uso de energía en las salas especializadas.

**Metodología de Desarrollo**
El proyecto fue desarrollado bajo la metodología API REST, lo que garantiza una arquitectura escalable, reutilizable y fácil de mantener. Esta metodología permite que el sistema sea adaptable a futuros cambios, tanto en términos de infraestructura tecnológica como en la adición de nuevas funcionalidades, como la integración con otros sistemas de gestión de la universidad.

**Resultados e Impacto**
La implementación de este sistema en las Salas Especializadas de Software de la Universidad Externado de Colombia ha tenido un impacto significativo. No solo se ha mejorado el control sobre el acceso y el uso de los equipos, sino que también se ha implementado un sistema de seguimiento del software licenciado, garantizando un uso adecuado y evitando el uso indebido de licencias. Este enfoque ayuda a la universidad a maximizar el valor de sus inversiones en software, asegurando que cada licencia sea utilizada de manera eficiente y conforme a las políticas institucionales.

En resumen, este proyecto ofrece una solución técnica avanzada que no solo optimiza el uso de los recursos tecnológicos de la universidad, sino que también garantiza un control exhaustivo sobre el uso de software licenciado, proporcionando una experiencia de usuario fluida y efectiva para estudiantes y docentes.
