# Comparativo: l10n_br_nfe

## Informações do Módulo

| Campo | Valor |
|-------|-------|
| Nome Técnico | l10n_br_nfe |
| Nome Amigável | Nota Fiscal Eletrônica |
| Autor | OCA/l10n-brazil |
| Repositório | https://github.com/OCA/l10n-brazil |

## Disponibilidade por Versão

| Versão | Status | Observações |
|--------|--------|-------------|
| Odoo 14 | ✅ Disponível | Versão estável |
| Odoo 15 | ✅ Disponível | Mantido pela comunidade |
| Odoo 16 | ✅ Disponível | Versão LTS |
| Odoo 17 | ✅ Disponível | Atualizado para OWL |
| Odoo 18 | ✅ Disponível | Compatível |
| Odoo 19 | ✅ Disponível | Funcional |

## Funcionalidades por Versão

### Odoo 14 (Base)
- Emissão de NF-e
- Validação de NF-e
- Transmissão para SEFAZ
- Cancelamento de NF-e
- Carta de correção

### Odoo 15
- Melhorias de performance
- Novos campos obrigatórios
- Atualização de validações

### Odoo 16 (LTS)
- Suporte a NF-e 4.0
- Melhorias de segurança
- Atualização de campos

### Odoo 17
- Atualizado para interface OWL
- Melhorias de UX
- Novas opções de configuração

### Odoo 18
- Compatibilidade com novas APIs
- Melhorias de integração
- Suporte a novos eventos

### Odoo 19
- Integração com IA para validação
- Melhorias de automação
- Novos fluxos de trabalho

## Funcionalidades Novas por Versão

| Versão | Funcionalidade Nova |
|--------|---------------------|
| v15 | Validação automática de CNPJ/CPF |
| v16 | Suporte a NF-e 4.0 |
| v17 | Interface completely redesigned |
| v18 | Integração com SEFAZ aprimorada |
| v19 | AI-powered NF-e validation |

## Migração

| De → Para | Complexidade | Tempo Estimado | Observações |
|-----------|--------------|----------------|-------------|
| v14 → v15 | Baixa | 2-3 dias | Atualização de tabelas |
| v15 → v16 | Média | 3-4 dias | Mudanças para NF-e 4.0 |
| v16 → v17 | Média | 3-5 dias | Atualização de interface |
| v17 → v18 | Baixa | 2-3 dias | Compatível |
| v18 → v19 | Baixa | 2-3 dias | Atualização menor |

## Breaking Changes

### v16
- Migração para NF-e 4.0
- Alteração na estrutura de dados

### v17
- Mudança completa para OWL
- Atualização dos templates XML

### v18
- Alterações na API de domínio
- Atualização dos métodos de validação

## Notas

- Módulo essencial para empresas brasileiras
- Mantido ativamente pela comunidade OCA
- Recomenda-se testes extensivos antes de migração
- Verificar compatibilidade com módulos dependentes
