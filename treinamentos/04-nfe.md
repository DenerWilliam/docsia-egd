# TREINAMENTO: Como Emitir uma Nota Fiscal Eletronica (NF-e) no Odoo 16

## Sumario

| Modulo | Funcao |
|--------|--------|
| `l10n_br_fiscal` | Base fiscal — documento, operacoes, impostos |
| `l10n_br_nfe` | Emissao e consulta de NF-e |
| `l10n_br_account` | Integracao contabilidade + fiscal |
| `l10n_br_account_nfe` | Integracao contabilidade + NF-e |
| `l10n_br_sale` | Integracao venda + fiscal |
| `l10n_br_stock` | Integracao estoque + fiscal |
| `l10n_br_stock_account` | Integracao estoque + contabilidade + fiscal |
| `l10n_br_fiscal_certificate` | Certificado digital A1 |

---

## PARTE 1: Configuracao Inicial (uma so vez)

### Etapa 1.1 — Cadastrar os Dados da Empresa

**Menu:** Configuracoes > Empresa > Empresa

1. Abra a empresa principal
2. Preencha os campos fiscais:
   - **CNPJ**: xx.xxx.xxx/xxxx-xx
   - **Inscricao Estadual (IE):** xxxxxxxxxxxx
   - **Inscricao Municipal (IM):** xxxxxxxx (se aplicavel)
   - **CNAE Fiscal:** xxxxx-xx/xx
   - **Regime Tributario:** Lucro Presumido / Lucro Real / Simples Nacional
3. Preencha o endereco completo:
   - Logradouro, Numero, Complemento
   - Bairro, Cidade, Estado, CEP
4. Salve

> **Por que isso importa:** Esses dados vao para todos os documentos fiscais. Se o CNPJ ou IE estiver errado, a SEFAZ rejeita a NF-e.

---

### Etapa 1.2 — Cadastrar o Certificado Digital A1

**Menu:** Fiscal > Certificados

1. Clique em "Criar"
2. Preencha:
   - **Nome:** Certificado A1 - Empresa
   - **Arquivo:** Selecione o arquivo .pfx do certificado
   - **Senha:** Digite a senha do certificado
3. Salve
4. Teste o certificado clicando em "Testar"

> **Por que isso importa:** Sem certificado valido, nao e possivel enviar NF-e. O certificado A1 tem validade de 1 ano.

---

### Etapa 1.3 — Configurar a Operacao Fiscal

**Menu:** Fiscal > Configuracoes > Operacoes Fiscais

1. Verifique se a operacao padrao esta configurada:
   - **Tipo:** Saida (para vendas)
   - **CFOP:** 5.102 (venda de mercadoria)
   - **Impostos:** ICMS, PIS, COFINS configurados
2. Para cada tipo de operacao, crie uma operacao fiscal:
   - Venda de mercadoria → CFOP 5.102
   - Prestacao de servico → CFOP 5.933
   - Transferencia → CFOP 5.153
   - Devolucao → CFOP 1.202

> **Por que isso importa:** A operacao fiscal define quais impostos serao aplicados em cada tipo de transacao.

---

### Etapa 1.4 — Configurar os Impostos

**Menu:** Fiscal > Configuracoes > Impostos

Verifique se os impostos estao corretos:

| Imposto | Descricao | Exemplo |
|---------|-----------|---------|
| ICMS | Imposto sobre Circulacao de Mercadorias | 18% (SP) |
| IPI | Imposto sobre Produtos Industrializados | 5% (varia por produto) |
| PIS | Programa de Integracao Social | 1,65% |
| COFINS | Contribuicao para Financiamento da Seguridade | 7,6% |

1. Abra cada imposto
2. Verifique a **aliquota** (percentual)
3. Verifique a **conta contabil** vinculada
4. Verifique a **regra de aplicacao**

> **Por que isso importa:** Impostos errados geram NF-e com valores incorretos. Sempre confirme com o departamento fiscal.

---

### Etapa 1.5 — Configurar os Parametros da NF-e

**Menu:** Fiscal > Configuracoes > NF-e

1. Configure os dados de envio:
   - **Ambiente:** Producao ou Homologacao
   - **UF do Emitente:** Estado da empresa
   - **Codigo do Municipio:** Codigo IBGE
   - **Formato de Impressao:** Retrato (padrao)
   - **Versao do Processo:** WB (padrao)
2. Configure a serie:
   - **Serie:** 1 (padrao para saida)
   - **Numero Inicial:** 1
3. Salve

> **Por que isso importa:** Parametros errados fazem a SEFAZ rejeitar o documento.

---

## PARTE 2: Fluxo Completo — Venda com NF-e

### Etapa 2.1 — Criar o Pedido de Venda

**Menu:** Vendas > Pedidos > Pedidos

1. Clique em **"Criar"**
2. Preencha o cabecalho:
   - **Cliente:** Selecione o cliente (com CNPJ/IE cadastrados)
   - **Condicao de Pagamento:** Ex: 30/60/90 dias
   - **Lista de Preco:** Se aplicavel
3. Na aba "Linhas do Pedido", adicione os produtos:
   - **Produto:** Selecione o produto
   - **Quantidade:** Informe a quantidade
   - **Preco Unitario:** Preco de venda
   - **Impostos:** Sistema calcula automaticamente
4. Verifique os impostos calculados:
   - Clique na linha do produto
   - Veja os impostos na aba "Impostos"
   - Confirme que ICMS, PIS, COFINS estao corretos
5. Clique em **"Confirmar"**

> **O que acontece:** O pedido muda de "Rascunho" para "Ordem de Venda". O sistema reserva o estoque automaticamente.

---

### Etapa 2.2 — Verificar a Operacao Fiscal

**No Pedido de Venda:**

1. Na aba "Outras Informacoes" ou nos dados do pedido
2. Verifique o campo **"Operacao Fiscal"**
3. Confirme que e a operacao correta:
   - Venda → Operacao de Venda
   - Servico → Operacao de Servico
   - Transferencia → Operacao de Transferencia
4. Se estiver errado, altere antes de confirmar

> **Por que importa:** A operacao fiscal define os CFOPs e impostos. Se errar aqui, tudo na NF-e fica errado.

---

### Etapa 2.3 — Confirmar o Pedido e Gerar a Transferencia

**Apos confirmar o pedido de venda:**

1. O sistema cria automaticamente uma **transferencia de estoque** (stock.picking)
2. Acesse a transferencia:
   - Clique no botao "Transferencia" no pedido de venda
   - Ou va em Estoque > Operacoes > Transferencias
3. Na transferencia, verifique:
   - **Tipo de Operacao:** Saida
   - **Local de Origem:** Estoque
   - **Local de Destino:** Cliente
   - **Produtos:** Todos os itens do pedido

> **O que acontece:** A transferencia e o documento que move o estoque. Sem ela, nao ha como gerar a NF-e.

---

### Etapa 2.4 — Validar a Transferencia (Baixa de Estoque)

**Na Transferencia (stock.picking):**

1. Verifique se todos os produtos estao disponiveis
2. Se nao estiver, clique em **"Verificar Disponibilidade"**
3. Quando tudo estiver disponivel, clique em **"Validar"**
4. Confirme a quantidade a ser transferida
5. O sistema baixa o estoque e cria as movimentacoes

> **O que acontece:**
> - Estoque e baixado
> - Movimentacoes de estoque sao criadas
> - O **documento fiscal** e criado automaticamente (l10n_br_fiscal.document)
> - A NF-e e preparada para envio

---

### Etapa 2.5 — Acessar o Documento Fiscal

**Apos validar a transferencia:**

1. No pedido de venda, clique no botao **"Documento Fiscal"**
2. Ou va em Fiscal > Documentos > Documentos Fiscais
3. Abra o documento fiscal criado

**No formulario do documento fiscal, verifique:**

| Campo | O que verificar |
|-------|-----------------|
| **Tipo de Documento** | NF-e (Nota Fiscal Eletronica) |
| **Numero** | Proximo numero disponivel |
| **Data** | Data de emissao |
| **Cliente** | CNPJ/IE do destinatario |
| **Endereco** | Endereco de entrega |
| **Operacao Fiscal** | CFOP correto |
| **Produtos** | Descricao, quantidade, preco |
| **Impostos** | ICMS, IPI, PIS, COFINS com aliquotas corretas |
| **Valor Total** | Soma dos itens + impostos |

> **IMPORTANTE:** Revise TODOS os dados antes de enviar. A SEFAZ nao permite correcao apos a autorizacao.

---

### Etapa 2.6 — Revisar os Impostos do Documento Fiscal

**No Documento Fiscal:**

1. Na aba **"Impostos"** ou **"Linhas"**
2. Para cada produto, verifique:
   - **CFOP:** 5.102 (venda saida interna)
   - **Base de Calculo ICMS:** Valor do produto
   - **Aliquota ICMS:** Percentual do estado
   - **Valor ICMS:** Base x Aliquota
   - **Base de Calculo PIS/COFINS:** Valor do produto
   - **Aliquota PIS/COFINS:** Percentual configurado
3. Verifique o **Valor Total do Documento**
4. Confirme que esta correto

> **Dica:** Se algum imposto estiver errado, volte para a configuracao de operacoes fiscais e corrija. Nao altere direto no documento fiscal.

---

### Etapa 2.7 — Enviar a NF-e para a SEFAZ

**No Documento Fiscal:**

1. Clique no botao **"Enviar NF-e"**
2. O sistema:
   - Gera o XML da NF-e
   - Assina com o certificado digital
   - Envia para a SEFAZ
   - Aguarda a resposta
3. Aguarde o processamento (pode levar alguns segundos)

**Possiveis respostas:**

| Resposta | Significado | O que fazer |
|----------|-------------|-------------|
| **Autorizado** | NF-e aceita pela SEFAZ | Imprimir DANFE, entregar ao cliente |
| **Rejeitado** | SEFAZ rejeitou o documento | Verificar motivo, corrigir e reenviar |
| **Em Processamento** | SEFAZ ainda processando | Aguardar e consultar depois |

> **Se rejeitado:** Clique em "Consultar Rejeicao" para ver o motivo. Corrija o problema e envie novamente.

---

### Etapa 2.8 — Consultar Status da NF-e

**Se a NF-e ficar "Em Processamento":**

1. No documento fiscal, clique em **"Consultar Status"**
2. O sistema consulta a SEFAZ e atualiza o status
3. Repita ate receber "Autorizado"

**Ou consulte pela chave de acesso:**

1. No documento fiscal, copie a **Chave de Acesso** (44 digitos)
2. Acesse o site da SEFAZ do seu estado
3. Cole a chave e consulte

---

### Etapa 2.9 — Imprimir o DANFE

**Apos a NF-e ser autorizada:**

1. No documento fiscal, clique em **"Imprimir DANFE"**
2. O PDF do DANFE e gerado
3. Imprima e coloque junto com a mercadoria
4. Ou envie por email ao cliente

> **O que e o DANFE:** Documento Auxiliar da Nota Fiscal Eletronica. E a representacao grafica da NF-e que acompanha a mercadoria.

---

### Etapa 2.10 — Consultar a NF-e no Portal da SEFAZ

**Para verificar se a NF-e esta valida:**

1. Copie a **Chave de Acesso** do documento fiscal
2. Acesse o portal da SEFAZ do seu estado
3. Va em "Consulta de NF-e por Chave de Acesso"
4. Cole a chave
5. Confirme que:
   - Situacao: **Autorizada**
   - Data de Autorizacao: Data correta
   - Protocolo: Numero do protocolo

---

## PARTE 3: Situacoes Especiais

### 3.1 — Cancelar uma NF-e

**So e possivel cancelar se:**
- A NF-e foi autorizada ha menos de 24 horas
- A mercadoria NAO foi enviada

**Passos:**

1. Abra o documento fiscal autorizado
2. Clique em **"Cancelar NF-e"**
3. Informe o **motivo do cancelamento** (minimo 15 caracteres)
4. Confirme
5. O sistema envia o cancelamento para a SEFAZ
6. Aguarde a resposta

> **Se nao puder cancelar:** Emita uma Nota Fiscal de Devolucao (NFe de devolucao) com CFOP de retorno.

---

### 3.2 — Inutilizar Numeracao

**Quando usar:** Se precisar pular numeros da sequencia

1. Va em Fiscal > NF-e > Inutilizacao de Numeracao
2. Clique em "Criar"
3. Informe:
   - **Numero Inicio:** Primeiro numero a inutilizar
   - **Numero Fim:** Ultimo numero a inutilizar
   - **Justificativa:** Motivo da inutilizacao
4. Envie para a SEFAZ

---

### 3.3 — Corrigir o Controle do Destinatario (Carta de Correcao)

**Quando usar:** Para corrigir dados do destinatario apos a autorizacao (exceto valor)

1. No documento fiscal, clique em **"Carta de Correcao"**
2. Informe o que deseja corrigir
3. Envie para a SEFAZ

> **Nao e possivel corrigir:** Valor, impostos, produtos. Para esses casos, cancele e reemita.

---

### 3.4 — Consultar Documentos Recebidos (Distribution de DF-e)

**Para ver NF-e que outros emitiram para voce:**

1. Va em Fiscal > DF-e
2. Clique em **"Consultar NFe Destinadas"**
3. Informe o CNPJ
4. O sistema baixa todas as NF-e destinadas ao seu CNPJ
5. Voce pode **incorporar** ao sistema ou **ignorar**

---

## PARTE 4: Dicas e Cuidados

### Antes de Enviar

- [ ] CNPJ/IE do cliente esta correto?
- [ ] Endereco de entrega esta correto?
- [ ] CFOP e o correto para essa operacao?
- [ ] Aliquotas de ICMS, PIS, COFINS estao corretas?
- [ ] Descricao dos produtos esta clara?
- [ ] Valor total esta correto?
- [ ] Certificado digital esta valido (nao vencido)?

### Apos Enviar

- [ ] DANFE foi impresso e colocado com a mercadoria?
- [ ] Chave de acesso foi enviada ao cliente?
- [ ] Arquivo XML foi salvo para consulta futura?
- [ ] Lancamento contabil foi criado automaticamente?

### Numeracao

- [ ] Numeracao da NF-e esta sequencial?
- [ ] Nao ha gaps na numeracao?
- [ ] Serie esta configurada corretamente?

---

## PARTE 5: Erros Comuns e Solucoes

| Erro | Causa | Solucao |
|------|-------|---------|
| **Rejeicao 104** | CNPJ do destinatario invalido | Verifique o CNPJ no cadastro do cliente |
| **Rejeicao 124** | IE do destinatario invalida | Verifique a IE no cadastro do cliente |
| **Rejeicao 238** | CFOP invalido | Verifique a operacao fiscal |
| **Rejeicao 252** | Imposto calculado incorretamente | Verifique os impostos no documento |
| **Rejeicao 574** | Certificado invalido ou vencido | Verifique a validade do certificado |
| **Rejeicao 631** | Chave de acesso invalida | Verifique os 44 digitos da chave |
| **Timeout** | SEFAZ sem resposta | Aguarde e consulte o status depois |
| **XML malformado** | Erro na geracao do XML | Contate o suporte tecnico |

---

## PARTE 6: Fluxo Resumido

```
PEDIDO DE VENDA
    │
    ├── 1. Criar pedido com cliente e produtos
    ├── 2. Confirmar pedido
    │
    ▼
TRANSFERENCIA DE ESTOQUE
    │
    ├── 3. Verificar disponibilidade
    ├── 4. Validar transferencia
    │
    ▼
DOCUMENTO FISCAL (criado automaticamente)
    │
    ├── 5. Revisar dados fiscais
    ├── 6. Revisar impostos
    │
    ▼
ENVIO PARA SEFAZ
    │
    ├── 7. Clicar "Enviar NF-e"
    ├── 8. Aguardar autorizacao
    │
    ├── ✅ AUTORIZADO → Imprimir DANFE → Entregar mercadoria
    │
    └── ❌ REJEITADO → Verificar motivo → Corrigir → Reenviar
```

---

## Referencia: Modulos Envolvidos

| Modulo | Quando Usado |
|--------|--------------|
| `l10n_br_fiscal` | Configuracao de operacoes, impostos, documentos |
| `l10n_br_nfe` | Emissao e consulta de NF-e |
| `l10n_br_account` | Integracao com contabilidade |
| `l10n_br_account_nfe` | Vinculo entre fatura e NF-e |
| `l10n_br_sale` | Integracao com vendas |
| `l10n_br_stock` | Integracao com estoque |
| `l10n_br_stock_account` | Integracao estoque + contabilidade |
| `l10n_br_fiscal_certificate` | Gestao do certificado digital A1 |
| `l10n_br_fiscal_dfe` | Distribuicao de documentos fiscais |
| `l10n_br_fiscal_closing` | Encerramento fiscal mensal |

---

*Treinamento baseado na documentacao dd-modulos Odoo 16 — Localizacao Brasileira OCA*
