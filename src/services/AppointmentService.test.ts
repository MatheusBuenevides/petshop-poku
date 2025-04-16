import { test } from "poku";
import AppointmentService from "./AppointmentService";

test("validateAppointment - deve bloquear jacaré sem autorização IBAMA", async () => {
  const result = await AppointmentService.validateAppointment("jacaré", "2025-04-10", false);
  if (result.allowed !== false) {
    throw new Error("Esperado bloqueio para jacaré sem autorização do IBAMA");
  }
  if (result.reason !== "É necessário ter autorização do IBAMA para agendar um jacaré.") {
    throw new Error("Mensagem de motivo incorreta para o agendamento de jacaré sem autorização");
  }
});

test("validateAppointment - deve permitir jacaré com autorização IBAMA", async () => {
  const result = await AppointmentService.validateAppointment("jacaré", "2025-04-10", true);
  if (result.allowed !== true) {
    throw new Error("Esperado liberação para jacaré com autorização do IBAMA");
  }
});

test("validateAppointment - deve bloquear capivara durante período de reprodução", async () => {
  const result = await AppointmentService.validateAppointment("capivara", "2025-09-15", false);
  if (result.allowed !== false) {
    throw new Error("Esperado bloqueio para capivara durante período de reprodução");
  }
  if (result.reason !== "Capivara não pode ser agendada neste período de reprodução.") {
    throw new Error("Mensagem de motivo incorreta para capivara no período de reprodução");
  }
});

test("validateAppointment - deve permitir capivara fora do período de reprodução", async () => {
  const result = await AppointmentService.validateAppointment("capivara", "2025-05-15", false);
  if (result.allowed !== true) {
    throw new Error("Esperado liberação para capivara fora do período de reprodução");
  }
});

test("validateAppointment - deve permitir espécies sem regras específicas", async () => {
  const result = await AppointmentService.validateAppointment("elefante", "2025-04-10", false);
  if (result.allowed !== true) {
    throw new Error("Esperado liberação para espécies sem regras específicas");
  }
});
