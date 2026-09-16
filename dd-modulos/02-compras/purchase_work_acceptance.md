# purchase_work_acceptance

## Informações Gerais

| Campo | Valor |
|-------|-------|
| Nome Técnico | purchase_work_acceptance |
| Nome Amigável | Purchase Work Acceptance |
| Autor | Ecosoft, OCA |
| Versão | 16.0.1.0.0 |
| Repositório | https://github.com/OCA/purchase-workflow |

## Descrição

Permite registrar a aceitação de trabalho na compra de serviços.

## Dependências

- purchase

## Modelos Principais

### purchase.work.acceptance
| Campo | Tipo | Descrição |
|-------|------|-----------|
| purchase_id | Many2one | Ordem de compra |
| state | Selection | Status |
| line_ids | One2many | Linhas aceitas |

## Views/Menus

- **Menu**: Compras > Aceitação de Trabalho
- **Views**: tree, form

## Segurança

- Herda permissões do módulo purchase

## Configuração

- Configurações > Compras > Aceitação

## Notas de Migração

- Módulo OCA migrado para v16
