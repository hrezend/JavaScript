package DIP;

public class Main {

	public static void main(String[] args) {

	}

}

/* Anotações:
 * Desta forma, temos a inversão das dependências.
 * Reduzimos o nível do acoplamento, pois agora o PasswordReminder não precisa
 * mais saber qual é o tipo de banco logo, fizemos uma abstração dessa aplicação.
 * Respeitamos os principios SRP e OCP por tabela.
 */