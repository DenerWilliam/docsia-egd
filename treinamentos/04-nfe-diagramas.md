# Fluxo de Emissao de NF-e no Odoo 16

## Fluxo Geral

```mermaid
flowchart TD
    START([Inicio]) --> CONFIG{Configuracao Inicial?}
    CONFIG -->|Nao| P1[PARTE 1: Configuracao]
    CONFIG -->|Sim| P2[PARTE 2: Emissao NF-e]

    %% PARTE 1 - CONFIGURACAO
    P1 --> C1[1.1 Cadastrar Empresa<br/>CNPJ, IE, Endereco]
    C1 --> C2[1.2 Cadastrar Certificado A1<br/>Arquivo .pfx + Senha]
    C2 --> C3[1.3 Configurar Operacao Fiscal<br/>CFOPs e Impostos]
    C3 --> C4[1.4 Configurar Impostos<br/>ICMS, IPI, PIS, COFINS]
    C4 --> C5[1.5 Configurar Parametros NF-e<br/>Ambiente, Serie, Numero]
    C5 --> P2

    %% PARTE 2 - EMISSAO
    P2 --> V1[2.1 Criar Pedido de Venda<br/>Cliente + Produtos + Qtd]
    V1 --> V2[2.2 Verificar Operacao Fiscal<br/>CFOP correto?]
    V2 -->|Nao| V2A[Alterar Operacao Fiscal]
    V2A --> V2
    V2 -->|Sim| V3[2.3 Confirmar Pedido]
    V3 --> V4[2.4 Transferencia Criada<br/>stock.picking automatico]
    V4 --> V5[2.5 Verificar Disponibilidade<br/>Estoque reservado?]
    V5 -->|Nao| V5A[Comprar/Transferir Estoque]
    V5A --> V5
    V5 -->|Sim| V6[2.6 Validar Transferencia<br/>Baixa de Estoque]
    V6 --> V7[2.7 Documento Fiscal Criado<br/>l10n_br_fiscal.document]
    V7 --> V8[2.8 Revisar Documento Fiscal<br/>Dados do cliente, produtos]
    V8 --> V9[2.9 Revisar Impostos<br/>ICMS, PIS, COFINS]
    V9 -->|Erro| V9A[Corrigir Operacao/Impostos]
    V9A --> V8
    V9 -->|OK| V10[2.10 Enviar NF-e<br/>XML + Assinatura + SEFAZ]
    V10 --> STATUS{Resposta SEFAZ?}

    STATUS -->|Autorizado| V11[2.11 Imprimir DANFE<br/>PDF para acompanhar mercadoria]
    V11 --> V12[2.12 Enviar ao Cliente<br/>Email + Chave de Acesso]
    V12 --> FIM([Fim])

    STATUS -->|Rejeitado| ERR[Verificar Motivo da Rejeicao]
    ERR --> CORR[Corrigir Dados]
    CORR --> V8

    STATUS -->|Em Processamento| AGU[Aguardar + Consultar Status]
    AGU --> STATUS

    style START fill:#4CAF50,color:#fff
    style FIM fill:#4CAF50,color:#fff
    style ERR fill:#f44336,color:#fff
    style STATUS fill:#FF9800,color:#fff
    style CONFIG fill:#2196F3,color:#fff
```

---

## Fluxo Detalhado — Documento Fiscal

```mermaid
flowchart LR
    subgraph PEDIDO["Pedido de Venda"]
        P1[ Criar Pedido]
        P2[ Selecionar Cliente]
        P3[ Adicionar Produtos]
        P4[ Confirmar]
    end

    subgraph ESTOQUE["Transferencia"]
        E1[ Verificar Estoque]
        E2[ Validar Transferencia]
        E3[ Baixa Automatica]
    end

    subgraph FISCAL["Documento Fiscal"]
        F1[ Dados do Cliente<br/>CNPJ, IE, Endereco]
        F2[ Produtos<br/>Descricao, Qtd, Preco]
        F3[ Impostos<br/>ICMS, PIS, COFINS]
        F4[ CFOP<br/>Operacao Fiscal]
        F5[ Valor Total<br/>Soma + Impostos]
    end

    subgraph ENVIO["Envio SEFAZ"]
        S1[ Gerar XML]
        S2[ Assinar com<br/>Certificado A1]
        S3[ Enviar para<br/>SEFAZ]
        S4[ Aguardar<br/>Resposta]
    end

    subgraph RESULTADO["Resultado"]
        R1{Autorizado?}
        R2[ Imprimir DANFE]
        R3[ Corrigir Dados]
        R4[ Reenviar]
    end

    PEDIDO --> ESTOQUE --> FISCAL --> ENVIO --> RESULTADO

    R1 -->|Sim| R2
    R1 -->|Nao| R3 --> R4 --> S3

    style PEDIDO fill:#E3F2FD
    style ESTOQUE fill:#FFF3E0
    style FISCAL fill:#E8F5E9
    style ENVIO fill:#F3E5F5
    style RESULTADO fill:#FFEBEE
```

---

## Fluxo de Decisao — Tipo de Documento

```mermaid
flowchart TD
    INICIO([Operacao Comercial]) --> TIPO{Tipo de Operacao?}

    TIPO -->|Venda| VENDA[Tipo: Saida<br/>CFOP: 5.102<br/>Doc: NF-e]
    TIPO -->|Devolucao| DEV[Tipo: Entrada<br/>CFOP: 1.202<br/>Doc: NF-e Devolucao]
    TIPO -->|Transferencia| TRANSF[Tipo: Transferencia<br/>CFOP: 5.153<br/>Doc: NF-e]
    TIPO -->|Servico| SERV[Tipo: Servico<br/>CFOP: 5.933<br/>Doc: NFS-e]
    TIPO -->|Remessa| REM[Tipo: Remessa<br/>CFOP: 5.405<br/>Doc: NF-e]
    TIPO -->|Importacao| IMP[Tipo: Importacao<br/>CFOP: 3.102<br/>Doc: DI/CI]

    VENDA --> OPERACAO[Configurar<br/>Operacao Fiscal]
    DEV --> OPERACAO
    TRANSF --> OPERACAO
    SERV --> OPERACAO
    REM --> OPERACAO
    IMP --> OPERACAO

    OPERACAO --> IMPOSTOS[Calcular Impostos<br/>ICMS + IPI + PIS + COFINS]
    IMPOSTOS --> DOC[Gerar Documento<br/>Fiscal]

    style INICIO fill:#4CAF50,color:#fff
    style TIPO fill:#FF9800,color:#fff
    style VENDA fill:#2196F3,color:#fff
    style DEV fill:#f44336,color:#fff
    style TRANSF fill:#9C27B0,color:#fff
    style SERV fill:#00BCD4,color:#fff
    style REM fill:#795548,color:#fff
    style IMP fill:#607D8B,color:#fff
```

---

## Fluxo de Erros e Correcoes

```mermaid
flowchart TD
    ENVIO[Enviar NF-e] --> SEFAZ{Resposta SEFAZ}

    SEFAZ -->|Autorizado| OK[NF-e Autorizada<br/>Imprimir DANFE]
    SEFAZ -->|Rejeitado| ERR[Codigo do Erro]

    ERR --> E104{Erro 104<br/>CNPJ Invalido?}
    ERR --> E124{Erro 124<br/>IE Invalida?}
    ERR --> E238{Erro 238<br/>CFOP Invalido?}
    ERR --> E252{Erro 252<br/>Imposto Errado?}
    ERR --> E574{Erro 574<br/>Certificado Vencido?}
    ERR --> OUTRO{Outro Erro}

    E104 -->|Sim| F1[Corrigir CNPJ<br/>no Cadastro do Cliente]
    E124 -->|Sim| F2[Corrigir IE<br/>no Cadastro do Cliente]
    E238 -->|Sim| F3[Corrigir CFOP<br/>na Operacao Fiscal]
    E252 -->|Sim| F4[Corrigir Impostos<br/>na Operacao Fiscal]
    E574 -->|Sim| F5[Renovar Certificado<br/>A1]
    OUTRO --> F6[Consultar Documentacao<br/>SEFAZ]

    F1 --> RE[Reenviar NF-e]
    F2 --> RE
    F3 --> RE
    F4 --> RE
    F5 --> RE
    F6 --> RE

    RE --> SEFAZ

    style OK fill:#4CAF50,color:#fff
    style ERR fill:#f44336,color:#fff
    style SEFAZ fill:#FF9800,color:#fff
    style RE fill:#2196F3,color:#fff
```

---

## Fluxo de Cancelamento

```mermaid
flowchart TD
    NF[Autorizada] --> TEMPO{Passou 24h?}

    TEMPO -->|Nao| MERC{Mercadoria Enviada?}
    TEMPO -->|Sim| DEVOLUCAO[Emitir NF-e<br/>de Devolucao]

    MERC -->|Nao| CAN[Cancelar NF-e<br/>Informe Motivo]
    MERC -->|Sim| DEVOLUCAO

    CAN --> SEFAZ[Enviar Cancelamento<br/>para SEFAZ]
    SEFAZ --> RESP{SEFAZ Aceitou?}

    RESP -->|Sim| OK[Cancelamento<br/>Confirmado]
    RESP -->|Nao| MOTIVO[Verificar Motivo]
    MOTIVO --> CAN

    DEVOLUCAO --> NF2[NF-e Devolucao<br/>CFOP 1.202]
    NF2 --> ENV2[Enviar NF-e<br/>Devolucao]
    ENV2 --> OK2[Devolucao<br/>Processada]

    style NF fill:#4CAF50,color:#fff
    style OK fill:#4CAF50,color:#fff
    style OK2 fill:#4CAF50,color:#fff
    style CAN fill:#f44336,color:#fff
    style DEVOLUCAO fill:#FF9800,color:#fff
```

---

## Fluxo de Integracao entre Modulos

```mermaid
flowchart TD
    subgraph MODULOS["Modulos Envolvidos"]
        M1[l10n_br_fiscal<br/>Base Fiscal]
        M2[l10n_br_nfe<br/>Emissao NF-e]
        M3[l10n_br_account<br/>Contabilidade]
        M4[l10n_br_sale<br/>Vendas]
        M5[l10n_br_stock<br/>Estoque]
        M6[l10n_br_stock_account<br/>Estoque + Contab.]
        M7[l10n_br_fiscal_certificate<br/>Certificado A1]
    end

    subgraph FLUXO["Fluxo de Dados"]
        F1[Pedido de Venda<br/>sale.order]
        F2[Transferencia<br/>stock.picking]
        F3[Documento Fiscal<br/>l10n_br_fiscal.document]
        F4[Nota Fiscal<br/>l10n_br_nfe.document]
        F5[Lancamento Contabil<br/>account.move]
        F6[Certificado<br/>l10n_br_fiscal.certificate]
    end

    M4 -->|Cria| F1
    M5 -->|Cria| F2
    M1 -->|Cria| F3
    M2 -->|Gera| F4
    M3 -->|Gera| F5
    M7 -->|Assina| F4

    F1 -->|Gera| F2
    F2 -->|Gera| F3
    F3 -->|Envia| F4
    F4 -->|Cria| F5

    style M1 fill:#E8F5E9
    style M2 fill:#F3E5F5
    style M3 fill:#FFF3E0
    style M4 fill:#E3F2FD
    style M5 fill:#FFF8E1
    style M6 fill:#FFEBEE
    style M7 fill:#E0F7FA
```
