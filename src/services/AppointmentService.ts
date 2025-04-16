export interface ValidationResult {
  allowed: boolean;
  reason?: string;
}

class AppointmentService {
  /**
   * @param species - Espécie do animal (ex: "jacaré", "capivara")
   * @param date - Data do agendamento (formato string, ex: "2025-04-10")
   * @param ibamaAuthorization - Se o cliente tem autorização do IBAMA
   * @returns Objeto com { allowed: boolean; reason?: string }
   */
  public async validateAppointment(
    species: string,
    date: string,
    ibamaAuthorization: boolean
  ): Promise<ValidationResult> {
    
    if (species.toLowerCase() === "jacaré" && !ibamaAuthorization) {
      return {
        allowed: false,
        reason: "É necessário ter autorização do IBAMA para agendar um jacaré."
      };
    }
    if (species.toLowerCase() === "capivara" && this.isReproductionPeriod(date)) {
      return {
        allowed: false,
        reason: "Capivara não pode ser agendada neste período de reprodução."
      };
    }
    return { allowed: true };
  }

  private isReproductionPeriod(date: string): boolean {
    const month = new Date(date).getMonth() + 1;
    return [9, 10, 11].includes(month);
  }
}
export default new AppointmentService();
