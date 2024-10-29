
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const alunos = [];

function cadastrarAluno() {
    rl.question('Digite o nome do aluno: ', nome => {
        rl.question('Digite o RA do aluno: ', ra => {
            rl.question('Digite a data de nascimento (DD/MM/AAAA): ', dataNascimento => {
                rl.question('Digite o CPF do aluno: ', cpf => {
                    rl.question('Digite a turma do aluno: ', turma => {
                        
                        alunos.push({ nome, ra, dataNascimento, cpf, turma });
                        console.log('\nAluno cadastrado com sucesso!\n');
                        menu();
                    });
                });
            });
        });
    });
}

function listarAlunos() {
    if (alunos.length === 0) {
        console.log('\nNenhum aluno cadastrado.\n');
    } else {
        console.log('\nLista de Alunos:');
        alunos.forEach((aluno, index) => {
            console.log(`\nAluno ${index + 1}`);
            console.log(`Nome: ${aluno.nome}`);
            console.log(`RA: ${aluno.ra}`);
            console.log(`Data de Nascimento: ${aluno.dataNascimento}`);
            console.log(`CPF: ${aluno.cpf}`);
            console.log(`Turma: ${aluno.turma}`);
        });
        console.log('\n');
    }
    menu();
}

function menu() {
    console.log('Escolha uma opção:');
    console.log('1. Cadastrar Aluno');
    console.log('2. Listar Alunos');
    console.log('3. Sair');

    rl.question('Opção: ', opcao => {
        switch (opcao) {
            case '1':
                cadastrarAluno();
                break;
            case '2':
                listarAlunos();
                break;
            case '3':
                console.log('Saindo...');
                rl.close();
                break;
            default:
                console.log('Opção inválida!\n');
                menu();
        }
    });
}

menu();
