# Prompt: Gerar Documentacao Tecnica (dd-modulos)

## Objetivo

Gerar documentacao tecnica completa para modulos do Odoo 16 seguindo o padrao estabelecido.

## Template de Referencia

Usar como base: `templates/dd-modulos/modulo.md`

## Instrucoes

### 1. Estrutura do Arquivo

O arquivo deve seguir esta estrutura:

```markdown
# {NOME_MODULO}

{DESCRICAO_CURTA}

## Informacoes Gerais
- Tabela com: Nome Tecnico, Descricao, Tipo, Dependencias, Categorias

## Funcionalidades
- Lista de funcionalidades principais
- Para cada uma: Como usar, Campos principais

## Integracao com Outros Modulos
- Relacionamentos com outros modulos do sistema

## Campos Personalizados
- Todos os campos x_ criados pelo modulo

## Views (Telas)
- XML das principais views (form, tree, kanban)

## Acessos e Permissoes
- Grupos de acesso
- Regras de acesso (ir.rule)

## Dados de Demonstracao
- Registros exemplos

## Erros Comuns
- Tabela de erros e solucoes

## Historico de Alteracoes
- Versoes e datas
```

### 2. Regras de Formatacao

- Usar tabelas para informacoes estruturadas
- Usar blocos de codigo para XML e Python
- Usar Mermaid para diagramas de relacionamento
- Manter tom tecnico e objetivo
- Portugues do Brasil

### 3. Conteudo Obrigatorio

Cada documentacao DEVE conter:
- [ ] Informacoes gerais completas
- [ ] Pelo menos 2 funcionalidades documentadas
- [ ] Tabela de campos personalizados
- [ ] Pelo menos 1 view em XML
- [ ] Regras de acesso
- [ ] 1 diagrama Mermaid (ER ou fluxo)
- [ ] Tabela de erros comuns

### 4. Exemplo de Uso

**Entrada:**
- Nome do modulo: `l10n_br_fiscal`
- Descricao: Base do sistema fiscal brasileiro
- Dependencias: `account`, `stock`

**Saida:**
- Arquivo: `l10n_br_fiscal.md`
- Conteudo: Documentacao completa seguindo o template

### 5. Checklist de Qualidade

- [ ] Template seguido corretamente
- [ ] Informacoes tecnicas precisas
- [ ] Codigos funcionais
- [ ] Diagramas claros
- [ ] Sem erros de portugues
- [ ] Links corretos

---

*Prompt para geracao de documentacao tecnica — Odoo 16 Localizacao Brasileira OCA*
