# hr_holidays_validity_duration

## Informações Gerais

| Campo | Valor |
|-------|-------|
| Nome Técnico | hr_holidays_validity_duration |
| Nome Amigável | Define a validity duration of leaves |
| Autor | OCA |
| Versão | 16.0.1.0.0 |
| Repositório | https://github.com/OCA/hr |

## Descrição

Define duração de validade de férias.

## Dependencies

- hr_holidays

## Models

### hr.leave.type (extensão)
| Campo | Tipo | Descrição |
|-------|------|-----------|
| validity_start | Date | Início da validade |
| validity_end | Date | Fim da validade |

## Views/Menus

- Extende views de hr.leave.type

## Segurança

- Herda permissões do módulo hr_holidays

## Configuração

- Configurações > RH > Tipos de Ausência

## Notas de Migração

- Migrado para v16 pelo OCA
