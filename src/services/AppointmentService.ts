// src/services/AppointmentService.ts

export interface ValidationResult {
  allowed: boolean;
  reason?: string;
}

class AppointmentService {
  /**
   * Valida um agendamento de animal exótico.
   * 
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
    
    // 1) Exemplo: "jacaré" sem IBAMA => Bloquear
    if (species.toLowerCase() === "jacaré" && !ibamaAuthorization) {
      return {
        allowed: false,
        reason: "É necessário ter autorização do IBAMA para agendar um jacaré."
      };
    }

    // 2) Exemplo: "capivara" em período de reprodução => Bloquear
    if (species.toLowerCase() === "capivara" && this.isReproductionPeriod(date)) {
      return {
        allowed: false,
        reason: "Capivara não pode ser agendada neste período de reprodução."
      };
    }

    // Se nenhuma das condições acima foi atendida, libera
    return { allowed: true };
  }

  /**
   * Método de exemplo que verifica se a data cai em um suposto "período de reprodução".
   * Ajuste a lógica para a sua necessidade.
   */
  private isReproductionPeriod(date: string): boolean {
    // Exemplo: considerar que meses 9, 10 e 11 são período de reprodução
    const month = new Date(date).getMonth() + 1;
    return [9, 10, 11].includes(month);
  }
}

// Vamos exportar uma instância (ou a classe inteira, se preferir)
export default new AppointmentService();
