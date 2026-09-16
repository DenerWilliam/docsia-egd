# quality_control_mrp_oca

## Informações Gerais

| Campo | Valor |
|-------|-------|
| Nome Técnico | quality_control_mrp_oca |
| Nome Amigável | Controle de Qualidade Manufatura |
| Autor | ForgeFlow, OCA |
| Versão | 16.0.1.1.0 |
| Repositório | https://github.com/OCA/manufacture |

## Descrição

Integração entre controle de qualidade e manufatura.

## Dependencies

- quality_control_oca
- mrp

## Models

### mrp.production (extensão)
| Campo | Tipo | Descrição |
|-------|------|-----------|
| inspection_ids | One2many | Inspeções |

## Views/Menus

- Extende views de mrp.production

## Segurança

- Herda permissões dos módulos quality_control_oca e mrp

## Configuração

- Configurações > Qualidade > Manufatura

## Notas de Migração

- Migrado para v16 pelo OCA
