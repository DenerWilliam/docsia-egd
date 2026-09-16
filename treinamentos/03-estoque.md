# TREINAMENTO: Fluxo de Estoque no Odoo 16

## Sumario

| Modulo | Funcao |
|--------|--------|
| `stock` | Gestao de estoque — transferencias, inventario, lotes |
| `stock_account` | Integracao estoque + contabilidade (custos) |
| `l10n_br_stock` | Integracao estoque + fiscal (CFOP de entrada/saida) |
| `l10n_br_stock_account` | Integracao estoque + contabilidade + fiscal |
| `stock_picking_batch` | Expedicao em lote (batch picking) |
| `stock_landed_costs` | Custos de importacao e frete |

---

## PARTE 1: Configuracao Inicial

### Etapa 1.1 — Configurar Locais de Estoque

**Menu:** Estoque > Configuracoes > Locais

1. Verifique os locais padrao:
   - **WH/Stock:** Estoque principal
   - **WH/Input:** Recebimento
   - **WH/Output:** Expedicao
   - **WH/Customers:** Clientes
   - **WH/Vendor Locations:** Fornecedores
2. Crie locais adicionais se necessario:
   - **Estoque Reservado:** Para itens reservados
   - **Estoque em Transito:** Para transferencias
   - **Defeituosos:** Para produtos com defeito

---

### Etapa 1.2 — Configurar Operacoes de Estoque

**Menu:** Estoque > Configuracoes > Operacoes

1. Verifique as operacoes padrao:
   - **Entrada (Receipt):** Recebimento de fornecedor
   - **Saida (Delivery):** Expedicao para cliente
   - **Transferencia Interna:** Movimentacao entre locais
   - **Devolucao de Cliente:** Retorno de mercadoria
   - **Devolucao para Fornecedor:** Retorno ao fornecedor
2. Para cada operacao, verifique:
   - **Tipo:** Entrada, Saida ou Interna
   - **Local de Origem:** De onde vem
   - **Local de Destino:** Para onde vai
   - **Regra de Reserva:** Como reserva estoque

---

### Etapa 1.3 — Configurar Regras de Reabastecimento

**Menu:** Estoque > Configuracoes > Regras de Reabastecimento

1. Para cada produto critico, configure:
   - **Ponto de Pedido:** Nivel minimo para gerar alerta
   - **Quantidade Alvo:** Quantidade ideal em estoque
   - **Fornecedor Padrao:** Quem fornecera
   - **Lead Time:** Tempo de reposicao em dias
2. O sistema gera sugestoes de compra automaticamente

---

### Etapa 1.4 — Configurar Unidades de Medida

**Menu:** Configuracoes > Geral > Unidades de Medida

1. Verifique as UMs padrao:
   - **un:** Unidade
   - **kg:** Quilograma
   - **l:** Litro
   - **m:** Metro
   - **m2:** Metro Quadrado
   - **m3:** Metro Cubico
2. Configure conversoes:
   - **Caixa:** 1 caixa = 12 unidades
   - **Fardo:** 1 fardo = 24 unidades

---

## PARTE 2: Fluxo de Entrada (Recebimento)

### Etapa 2.1 — Receber Mercadoria do Fornecedor

**Menu:** Estoque > Operacoes > Recebimentos

1. Abra a transferencia de recebimento
2. Quando a mercadoria chegar:
   - Verifique a quantidade recebida
   - Verifique a qualidade
   - Se houver divergencia:
     - **Quantidade menor:** Receba apenas o que chegou
     - **Quantidade maior:** Receba apenas o que foi pedido
     - **Produto errado:** Rejeite e notifique o fornecedor
3. Clique em **"Validar"**
4. O sistema baixa o estoque automaticamente

---

### Etapa 2.2 — Verificar Movimentacoes

**Menu:** No Historico de Movimentacoes

1. Apos validar, verifique as movimentacoes criadas:
   - **Entrada:** Produto entra no estoque
   - **Custo:** Valor do produto atualizado
   - **Documento Fiscal:** NF-e de entrada registrada
2. Confirme que o estoque esta correto

---

### Etapa 2.3 — Processar Devolucao de Cliente

**Menu:** Estoque > Operacoes > Devolucoes

1. Abra a devolucao do cliente
2. Verifique:
   - **Produto:** Correto
   - **Quantidade:** Conforme devolvido
   - **Motivo:** Registrado
3. Valide a devolucao
4. O sistema:
   - Devolve o produto ao estoque
   - Cria movimentacao de entrada
   - Gera documento fiscal (se aplicavel)

---

## PARTE 3: Fluxo de Saida (Expedicao)

### Etapa 3.1 — Preparar Pedido para Expedicao

**Menu:** Estoque > Operacoes > Expedicoes

1. Abra a expedicao do pedido de venda
2. Verifique:
   - **Produtos:** Todos os itens do pedido
   - **Quantidades:** Conforme pedido
   - **Endereco de Entrega:** Correto
3. Se necessario, imprima a **lista de separacao**

---

### Etapa 3.2 — Separar os Produtos (Picking)

**Menu:** Na Expedicao

1. Va ao estoque e separe os produtos
2. Para cada produto:
   - Confirme a quantidade
   - Verifique o lote (se aplicavel)
   - Registre a separacao no sistema
3. Quando tudo estiver separado:
   - Clique em **"Validar"**
   - Confirme a quantidade expedida

---

### Etapa 3.3 — Expedir a Mercadoria

**Menu:** Apos validar a expedicao

1. O sistema:
   - Baixa o estoque
   - Cria movimentacao de saida
   - Gera documento fiscal (se aplicavel)
2. Prepare a mercadoria para envio:
   - Embale adequadamente
   - Coloque a NF-e/DANFE junto
   - Registre o rastreamento (se aplicavel)

---

### Etapa 3.4 — Processar Devolucao para Fornecedor

**Menu:** Estoque > Operacoes > Devolucoes

1. Abra a devolucao para o fornecedor
2. Verifique:
   - **Produto:** Correto
   - **Quantidade:** Conforme devoluvido
   - **Motivo:** Registrado
3. Valide a devolucao
4. O sistema:
   - Remove o produto do estoque
   - Cria movimentacao de saida
   - Gera documento fiscal de devolucao

---

## PARTE 4: Transferencias Internas

### Etapa 4.1 — Criar Transferencia Interna

**Menu:** Estoque > Operacoes > Transferencias Internas

1. Clique em **"Criar"**
2. Informe:
   - **Origem:** Local de saida
   - **Destino:** Local de entrada
   - **Produtos:** Itens a transferir
   - **Quantidades:** Quantidades desejadas
3. Confirme

---

### Etapa 4.2 — Validar Transferencia

**Menu:** Na Transferencia

1. Va ao local de origem e separe os itens
2. Confirme as quantidades
3. Clique em **"Validar"**
4. O sistema:
   - Remove do local de origem
   - Adiciona ao local de destino
   - Cria movimentacao interna

---

### Etapa 4.3 — Transferencia entre Filiais

**Menu:** Estoque > Operacoes > Transferencias

1. Para transferir entre filiais:
   - Crie uma transferencia
   - Informe a filial de origem e destino
   - O sistema cria a saida na filial origem
   - E a entrada na filial destino
2. Cada filial emite sua NF-e (se aplicavel)

---

## PARTE 5: Inventario e Contagem

### Etapa 5.1 — Criar Inventario

**Menu:** Estoque > Operacoes > Inventarios

1. Clique em **"Criar"**
2. Informe:
   - **Local:** Local a inventariar
   - **Produtos:** Itens a contar (ou todos)
3. Confirme
4. O sistema cria as linhas de inventario

---

### Etapa 5.2 — Realizar Contagem

**Menu:** No Inventario

1. Va ao local e conte os produtos
2. Para cada produto:
   - Registre a **quantidade contada**
   - Se diferente do sistema:
     - **Maior:** Informe a quantidade real
     - **Menor:** Informe a quantidade real
3. Quando tudo estiver contado, clique em **"Validar""

---

### Etapa 5.3 — Ajustar Diferencas

**Menu:** Apos validar o inventario

1. O sistema cria movimentacoes de ajuste:
   - **Se faltou:** Movimentacao de saida
   - **Se sobrou:** Movimentacao de entrada
2. Verifique se as diferencas estao justificadas
3. Registre os motivos das diferencas

---

## PARTE 6: Lotes e Numeros de Serie

### Etapa 6.1 — Configurar Rastreamento por Lote

**Menu:** No Produto > Aba "Estoque"

1. Configure o rastreamento:
   - **Rastreamento por Lote:** Ativado
   - **Rastreamento por Numero de Serie:** Se aplicavel
   - **Geracao de Lote:** Automatico ou Manual
2. Para cada movimentacao, o sistema exige o lote

---

### Etapa 6.2 — Registrar Lote na Entrada

**Menu:** Na Transferencia de Recebimento

1. Ao receber produto com rastreabilidade:
   - Informe o **numero do lote** do fornecedor
   - Informe a **data de validade** (se aplicavel)
   - Informe o **fabricante** (se aplicavel)
2. Valide a transferencia

---

### Etapa 6.3 — Consultar Rastreabilidade

**Menu:** Estoque > Rastreabilidade

1. Consulte o historico de um lote:
   - **Entrada:** Quando e de quem recebeu
   - **Saida:** Quando e para quem enviou
   - **Estoque Atual:** Onde esta agora
2. Util para auditorias e recall de produtos

---

## PARTE 7: Relatorios e KPIs

### 7.1 — Consultar Estoque Atual

**Menu:** Estoque > Relatorios > Estoque

1. Consulte o estoque por:
   - **Produto:** Quantidade em cada local
   - **Local:** O que tem em cada local
   - **Lote:** Onde esta cada lote
   - **Valor:** Valor total do estoque

---

### 7.2 — Consultar Movimentacoes

**Menu:** Estoque > Relatorios > Movimentacoes

1. Filtre as movimentacoes por:
   - **Periodo:** Data de movimentacao
   - **Produto:** Itens movimentados
   - **Tipo:** Entrada, Saida, Interna
   - **Responsavel:** Quem fez a movimentacao

---

### 7.3 — Consultar Atrasos de Entrega

**Menu:** Estoque > Relatorios > Atrasos

1. Verifique expedicoes atrasadas:
   - **Pedido:** Qual pedido esta atrasado
   - **Produto:** Qual produto nao foi entregue
   - **Dias de Atraso:** Ha quantos dias
   - **Acao:** O que fazer para resolver

---

## PARTE 8: Erros Comuns e Solucoes

| Erro | Causa | Solucao |
|------|-------|---------|
| **Estoque negativo** | Saida maior que entrada | Verificar movimentacoes e corrigir |
| **Lote nao encontrado** | Lote nao cadastrado | Cadastrar lote na entrada |
| **Quantidade errada** | Contagem incorreta | Realizar inventario |
| **Local errado** | Produto em local incorreto | Transferir para local correto |
| **Custo errado** | Preco de compra nao atualizado | Verificar notas fiscais de entrada |
| **Rastreabilidade incompleta** | Lote nao registrado | Registrar lote na movimentacao |

---

## PARTE 9: Fluxo Resumido

```
ENTRADA (RECEBIMENTO)
    │
    ├── 1. Receber mercadoria do fornecedor
    ├── 2. Verificar quantidades e qualidade
    ├── 3. Validar recebimento
    │
    ▼
ESTOQUE
    │
    ├── 4. Produto entra no estoque
    ├── 5. Lote registrado (se aplicavel)
    ├── 6. Custo atualizado
    │
    ▼
SAIDA (EXPEDICAO)
    │
    ├── 7. Separar produtos
    ├── 8. Validar expedicao
    ├── 9. Expedir mercadoria
    │
    ▼
INVENTARIO
    │
    ├── 10. Contagem periodica
    ├── 11. Ajuste de diferencas
    │
    ▼
FIM
```

---

## Referencia: Modulos Envolvidos

| Modulo | Quando Usado |
|--------|--------------|
| `stock` | Gestao de estoque, transferencias, inventario |
| `stock_account` | Integracao com contabilidade (custos) |
| `l10n_br_stock` | Integracao com operacoes fiscais brasileiras |
| `l10n_br_stock_account` | Integracao estoque + contabilidade + fiscal |
| `stock_picking_batch` | Expedicao em lote (batch picking) |
| `stock_landed_costs` | Custos de importacao e frete |
| `stock_lots` | Gestao de lotes e numeros de serie |

---

*Treinamento baseado na documentacao dd-modulos Odoo 16 — Localizacao Brasileira OCA*
