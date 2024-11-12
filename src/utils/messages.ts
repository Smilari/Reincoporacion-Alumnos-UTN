import { LANGUAGE } from "./config";
import { Language } from "../types";

/**
 * This is an object that contains the messages for each language.
 */
const appMessages: Language = {
  en: {
    success: {
      fetch: "Fetched successfully",
      login: "Login successful",
      register: "Registration successful",
      delete: "Deleted successfully",
      update: "Updated successfully",
      create: "Created successfully",
      refreshAccessToken: "Access token refreshed successfully",
    },
    validation: {
      generic: "Validation failed",
      usernamePassword: "Username/Password is not valid",
      minLength: (minLength) => `The field must be at least ${minLength} characters long`,
      maxLength: (maxLength) => `The field must be at most ${maxLength} characters long`,
      requiredField: "This field is required",
      invalidEmail: "Invalid email",
    },
    accessToken: {
      notFound: "Access token not found",
      invalid: "Access token is not valid",
    },
    refreshToken: {
      notFound: "Refresh token not found",
      invalid: "Refresh token is not valid",
    },
    error: {
      generic: "An error occurred",
      internal: "Internal Server Error",
      forbidden: "Access denied",
      routeNotFound: "Route not found",
      userNotFound: "User not found",
      userNotProvided: "User not provided",
      userNotActive: "User is not active",
    },
    internalServer: {
      listeningOnPort: (port) => `Server listening on port ${port}`,
      middlewaresLoaded: "Middlewares loaded",
      routesLoaded: "Routes loaded",
      errorMiddlewaresLoaded: "Error middlewares loaded",
    }
  },
  es: {
    success: {
      fetch: "Datos recuperados exitosamente",
      login: "Login exitoso",
      register: "Registro exitoso",
      delete: "Borrado exitoso",
      update: "Actualizado exitoso",
      create: "Creado exitoso",
      refreshAccessToken: "Token renovado exitosamente",
    },
    validation: {
      generic: "Error de validación",
      usernamePassword: "Usuario/Contraseña no válidos",
      minLength: (minLength) => {
        return `El campo debe tener al menos ${minLength} caracteres`;
      },
      maxLength: (maxLength) => {
        return `El campo debe tener como máximo ${maxLength} caracteres`;
      },
      requiredField: "Este campo es obligatorio",
      invalidEmail: "Email no válido",
    },
    accessToken: {
      notFound: "Token de acceso no encontrado",
      invalid: "Token de acceso no válido",
    },
    refreshToken: {
      notFound: "Token de refresco no encontrado",
      invalid: "Token de refresco no válido",
    },
    error: {
      generic: "Ocurrió un error",
      internal: "Error de servidor interno",
      forbidden: "Acceso denegado",
      routeNotFound: "Ruta no encontrada",
      userNotFound: "Usuario no encontrado",
      userNotProvided: "Usuario no proporcionado",
      userNotActive: "El usuario no está activo",
    },
    internalServer: {
      listeningOnPort: (port) => `Servidor escuchando en el puerto ${port}`,
      middlewaresLoaded: "Middlewares cargados",
      routesLoaded: "Rutas cargadas",
      errorMiddlewaresLoaded: "Middlewares de error cargados",
    }
  },
};

export const langMessages = appMessages[LANGUAGE];