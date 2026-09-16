# Documentação Odoo 16 - Escodoo

## Visão Geral

Esta pasta contém a documentação completa dos 261 módulos Odoo 16 instalados no projeto Escodoo.

## Estrutura

```
docsia/
├── README.md                    # Este arquivo
├── dd-modulos/                  # Data Dictionary dos módulos
│   ├── 01-vendas/              # 13 módulos
│   ├── 02-compras/             # 15 módulos
│   ├── 03-estoque/             # 13 módulos
│   ├── 04-contabilidade/       # 34 módulos
│   ├── 05-rh/                  # 24 módulos
│   ├── 06-frota/               # 6 módulos
│   ├── 07-manufacturing/       # 6 módulos
│   ├── 08-localizacao-br/      # 43 módulos
│   ├── 09-web-ui/              # 16 módulos
│   ├── 10-relatorios/          # 12 módulos
│   ├── 11-base-core/           # 25 módulos
│   └── 12-escodoo/             # 47 módulos
├── comparativo/                 # Comparativo entre versões Odoo
│   ├── README.md               # Legenda e estatísticas
│   └── [áreas]/                # Arquivos por módulo
├── apresentacao/               # Apresentação client-facing
└── dados/                      # Dados auxiliares
```

## Estatísticas

- **Total de módulos**: 261
- **Módulos Escodoo**: 47
- **Módulos Odoo S.A.**: 76
- **Módulos OCA**: 138
- **Versão Odoo**: 16 (migrado do Odoo 14)
- **Cliente**: EGD
- **Cor da marca**: purple (#714B67)

## Áreas Funcionais

| Área | Módulos | Descrição |
|------|---------|-----------|
| Localização Brasileira | 43 | Módulos l10n_br_* |
| Contabilidade | 34 | Módulos account_* |
| Escodoo | 47 | Módulos egd_*, escodoo_* |
| RH | 24 | Módulos hr_* |
| Base/Core | 25 | Módulos base_*, web_*, etc. |
| Web/UI | 16 | Módulos web_* |
| Compras | 15 | Módulos purchase_* |
| Vendas | 13 | Módulos sale_* |
| Estoque | 13 | Módulos stock_* |
| Relatórios | 12 | Módulos mis_builder_*, report_* |
| Frota | 6 | Módulos fleet_* |
| Manufacturing | 6 | Módulos mrp_* |

## Uso

### Para desenvolvedores
- Consulte `dd-modulos/` para informações técnicas detalhadas
- Cada módulo contém: modelos, campos, views, segurança, dependências

### Para clientes
- Consulte `apresentacao/` para visão geral amigável
- `comparativo/` mostra evolução entre versões Odoo

### Para migração
- `comparativo/` contém tabelas de compatibilidade
- Cada módulo indica complexidade de migração
