package OCP;

public class Main {

	public static void main(String[] args) {
		
		ContratoCLT ct = new ContratoCLT();
		FolhaDePagamento fpg = new FolhaDePagamento();
		
		fpg.calcular(ct);

	}

}

/* Anotações:
 * Desta forma, toda vez que eu quiser criar um novo tipo de contrato,
 * basta implementar a interface "Remunerável" com o seu devido método
 * de remuneração. Respeitando o principio de aberto e fechado.
 */