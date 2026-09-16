# purchase_work_acceptance_evaluation

## Informações Gerais

| Campo | Valor |
|-------|-------|
| Nome Técnico | purchase_work_acceptance_evaluation |
| Nome Amigável | Purchase Work Acceptance Evaluation |
| Autor | Ecosoft, OCA |
| Versão | 16.0.1.0.0 |
| Repositório | https://github.com/OCA/purchase-workflow |

## Descrição

Permite avaliar a aceitação de trabalho na compra.

## Dependências

- purchase_work_acceptance

## Modelos Principais

### purchase.work.acceptance (extensão)
| Campo | Tipo | Descrição |
|-------|------|-----------|
| evaluation_ids | One2many | Avaliações |

## Views/Menus

- Extende views de purchase.work.acceptance

## Segurança

- Herda permissões do módulo purchase_work_acceptance

## Configuração

- Configurações > Compras > Avaliação

## Notas de Migração

- Módulo OCA migrado para v16
