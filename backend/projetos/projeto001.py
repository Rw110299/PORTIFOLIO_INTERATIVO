# Projeto 001: Calculadora Simples
def soma(a, b):
    return a + b

def subtrai(a, b):
    return a - b

def multiplica(a, b):
    return a * b

def divide(a, b):
    if b == 0:
        return "Erro: divisão por zero"
    return a / b

# Teste rápido
if __name__ == "__main__":
    print("2 + 3 =", soma(2,3))
