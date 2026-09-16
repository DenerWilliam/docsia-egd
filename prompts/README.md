# Prompts de Geracao de Documentacao

Prompts para gerar documentacao completa do Odoo 16 seguindo o padrao estabelecido.

## Prompts Disponiveis

| Prompt | Uso | Arquivo |
|--------|-----|---------|
| **DD-Modulos** | Documentacao tecnica de modulos | `01-dd-modulos.md` |
| **Apresentacao** | Apresentacao para clientes | `02-apresentacao.md` |
| **Comparativos** | Comparacao entre versoes | `03-comparativos.md` |
| **Treinamentos** | Material de treinamento | `04-treinamentos.md` |

## Como Usar

### 1. Escolha o prompt adequado

- Para documentacao tecnica: `01-dd-modulos.md`
- Para apresentacao ao cliente: `02-apresentacao.md`
- Para comparativo de versoes: `03-comparativos.md`
- Para material de treinamento: `04-treinamentos.md`

### 2. Copie o prompt

Copie todo o conteudo do arquivo de prompt escolhido.

### 3. Forneca as informacoes

Preencha as variaveis solicitadas no prompt:
- Nome do modulo/fluxo
- Descricao
- Dependencias
- Versoes (para comparativos)

### 4. Execute

Cole o prompt completo em uma ferramenta de IA (ChatGPT, Claude, etc.) e aguarde a geracao.

### 5. Valide

Verifique se o resultado:
- Segue o template corretamente
- Contem todos os elementos obrigatorios
- Esta livre de erros
- Faz sentido tecnicamente

## Estrutura de Saida

Cada prompt gera arquivos na estrutura:

```
docsia/
├── dd-modulos/
│   └── {area}/
│       └── {modulo}.md
├── apresentacao/
│   └── {cliente}.html
├── comparativo/
│   └── {area}/
│       └── {modulo}.md
└── treinamentos/
    ├── {fluxo}.html
    └── {fluxo}.md
```

## Dicas

1. **Seja especifico:** Quanto mais detalhes, melhor o resultado
2. **Referencie exemplos:** Use os templates como guia
3. **Valide sempre:** Revise o conteudo gerado
4. **Itere se necessario:** Refine o prompt baseado no resultado

---

*Prompts para geracao de documentacao — Odoo 16 Localizacao Brasileira OCA*
