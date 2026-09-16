# purchase_default_terms_conditions

## Informações Gerais

| Campo | Valor |
|-------|-------|
| Nome Técnico | purchase_default_terms_conditions |
| Nome Amigável | Purchase Default Terms Conditions |
| Autor | Escodoo, OCA |
| Versão | 16.0.1.0.3 |
| Repositório | https://github.com/OCA/purchase-workflow |

## Descrição

Permite definir termos e condições padrão para ordens de compra.

## Dependências

- purchase

## Modelos Principais

### purchase.order (extensão)
| Campo | Tipo | Descrição |
|-------|------|-----------|
| notes | Text | Termos e condições |

## Views/Menus

- Extende views de purchase.order

## Segurança

- Herda permissões do módulo purchase

## Configuração

- Configurações > Compras > Termos e Condições

## Notas de Migração

- Customização Escodoo migrada para v16
