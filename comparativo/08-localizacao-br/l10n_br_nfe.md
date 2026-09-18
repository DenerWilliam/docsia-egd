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

## Funcionalidades Novas por Versão

| Versão | Funcionalidade Nova |
|--------|---------------------|
| v15 | Validação automática de CNPJ/CPF |
| v16 | Suporte a NF-e 4.0 |

## Migração

| De → Para | Complexidade | Tempo Estimado | Observações |
|-----------|--------------|----------------|-------------|
| v14 → v15 | Baixa | 2-3 dias | Atualização de tabelas |
| v15 → v16 | Média | 3-4 dias | Mudanças para NF-e 4.0 |

## Breaking Changes

### v16
- Migração para NF-e 4.0
- Alteração na estrutura de dados

## Notas

- Módulo essencial para empresas brasileiras
- Mantido ativamente pela comunidade OCA
- Recomenda-se testes extensivos antes de migração
- Verificar compatibilidade com módulos dependentes
