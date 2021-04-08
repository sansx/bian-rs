(function() {var implementors = {};
implementors["bian_rs"] = [{"text":"impl Freeze for DFuturesHttpClient","synthetic":true,"types":[]},{"text":"impl Freeze for DFuturesWSClient","synthetic":true,"types":[]},{"text":"impl Freeze for SpotHttpClient","synthetic":true,"types":[]},{"text":"impl Freeze for UFuturesHttpClient","synthetic":true,"types":[]},{"text":"impl Freeze for UFuturesWSClient","synthetic":true,"types":[]},{"text":"impl Freeze for ContractType","synthetic":true,"types":[]},{"text":"impl Freeze for ContractStatus","synthetic":true,"types":[]},{"text":"impl Freeze for OrderStatus","synthetic":true,"types":[]},{"text":"impl Freeze for FuturesOrderType","synthetic":true,"types":[]},{"text":"impl Freeze for SpotOrderType","synthetic":true,"types":[]},{"text":"impl Freeze for OrderSide","synthetic":true,"types":[]},{"text":"impl Freeze for PositionDirect","synthetic":true,"types":[]},{"text":"impl Freeze for TimeInForce","synthetic":true,"types":[]},{"text":"impl Freeze for WorkingType","synthetic":true,"types":[]},{"text":"impl Freeze for MarginType","synthetic":true,"types":[]},{"text":"impl Freeze for NewOrderType","synthetic":true,"types":[]},{"text":"impl Freeze for Interval","synthetic":true,"types":[]},{"text":"impl Freeze for RateLimitType","synthetic":true,"types":[]},{"text":"impl Freeze for Method","synthetic":true,"types":[]},{"text":"impl Freeze for APIError","synthetic":true,"types":[]},{"text":"impl Freeze for PDepth","synthetic":true,"types":[]},{"text":"impl Freeze for PTrade","synthetic":true,"types":[]},{"text":"impl Freeze for PHistoricalTrade","synthetic":true,"types":[]},{"text":"impl Freeze for PAggTrade","synthetic":true,"types":[]},{"text":"impl Freeze for PKline","synthetic":true,"types":[]},{"text":"impl Freeze for PContinuousKline","synthetic":true,"types":[]},{"text":"impl Freeze for PIndexPriceKline","synthetic":true,"types":[]},{"text":"impl Freeze for PSymbol","synthetic":true,"types":[]},{"text":"impl Freeze for PSymbolPair","synthetic":true,"types":[]},{"text":"impl Freeze for PFundingRate","synthetic":true,"types":[]},{"text":"impl Freeze for PForceOrder","synthetic":true,"types":[]},{"text":"impl Freeze for PUFutures","synthetic":true,"types":[]},{"text":"impl Freeze for PDFutures","synthetic":true,"types":[]},{"text":"impl Freeze for PTakerBullSell","synthetic":true,"types":[]},{"text":"impl Freeze for PLvtKlines","synthetic":true,"types":[]},{"text":"impl Freeze for PTimestamp","synthetic":true,"types":[]},{"text":"impl Freeze for PPositionSideDual","synthetic":true,"types":[]},{"text":"impl Freeze for PFuturesOrderSpec","synthetic":true,"types":[]},{"text":"impl Freeze for PFuturesOrder","synthetic":true,"types":[]},{"text":"impl Freeze for PSpotOrder","synthetic":true,"types":[]},{"text":"impl Freeze for PSpotOrderSpec","synthetic":true,"types":[]},{"text":"impl Freeze for PBatchOrder","synthetic":true,"types":[]},{"text":"impl Freeze for PQueryFuturesOrder","synthetic":true,"types":[]},{"text":"impl Freeze for PQuerySpotOrder","synthetic":true,"types":[]},{"text":"impl Freeze for PSymbolWithTs","synthetic":true,"types":[]},{"text":"impl Freeze for PBatchCancelOrder","synthetic":true,"types":[]},{"text":"impl Freeze for PCountdownCancel","synthetic":true,"types":[]},{"text":"impl Freeze for POptionSymbolQuery","synthetic":true,"types":[]},{"text":"impl Freeze for PHistOrder","synthetic":true,"types":[]},{"text":"impl Freeze for PLeverage","synthetic":true,"types":[]},{"text":"impl Freeze for PMarginType","synthetic":true,"types":[]},{"text":"impl Freeze for PPositionMargin","synthetic":true,"types":[]},{"text":"impl Freeze for PPositionMarginHist","synthetic":true,"types":[]},{"text":"impl Freeze for PUserTrade","synthetic":true,"types":[]},{"text":"impl Freeze for EmptyResponse","synthetic":true,"types":[]},{"text":"impl Freeze for UFuturesAccountBalance","synthetic":true,"types":[]},{"text":"impl Freeze for DFuturesAccountBalance","synthetic":true,"types":[]},{"text":"impl Freeze for ServerTime","synthetic":true,"types":[]},{"text":"impl Freeze for RateLimit","synthetic":true,"types":[]},{"text":"impl Freeze for FuturesSymbolFilter","synthetic":true,"types":[]},{"text":"impl Freeze for SpotSymbolFilter","synthetic":true,"types":[]},{"text":"impl Freeze for CodeResponse","synthetic":true,"types":[]},{"text":"impl Freeze for UFuturesSymbol","synthetic":true,"types":[]},{"text":"impl Freeze for DFuturesSymbol","synthetic":true,"types":[]},{"text":"impl Freeze for SpotSymbol","synthetic":true,"types":[]},{"text":"impl Freeze for UFuturesExchangeInfo","synthetic":true,"types":[]},{"text":"impl Freeze for DFuturesExchangeInfo","synthetic":true,"types":[]},{"text":"impl Freeze for SpotExchangeInfo","synthetic":true,"types":[]},{"text":"impl Freeze for FuturesDepth","synthetic":true,"types":[]},{"text":"impl Freeze for SpotDepth","synthetic":true,"types":[]},{"text":"impl Freeze for UFuturesTrade","synthetic":true,"types":[]},{"text":"impl Freeze for DFuturesTrade","synthetic":true,"types":[]},{"text":"impl Freeze for SpotTrade","synthetic":true,"types":[]},{"text":"impl Freeze for UFuturesHistoricalTrade","synthetic":true,"types":[]},{"text":"impl Freeze for DFuturesHistoricalTrade","synthetic":true,"types":[]},{"text":"impl Freeze for SpotHistoricalTrade","synthetic":true,"types":[]},{"text":"impl Freeze for AggTrade","synthetic":true,"types":[]},{"text":"impl Freeze for Kline","synthetic":true,"types":[]},{"text":"impl Freeze for UPremiumIndex","synthetic":true,"types":[]},{"text":"impl Freeze for DPremiumIndex","synthetic":true,"types":[]},{"text":"impl Freeze for FundingRate","synthetic":true,"types":[]},{"text":"impl Freeze for H24ticker","synthetic":true,"types":[]},{"text":"impl Freeze for DFuturesH24ticker","synthetic":true,"types":[]},{"text":"impl Freeze for FuturesPrice","synthetic":true,"types":[]},{"text":"impl Freeze for DFuturesPrice","synthetic":true,"types":[]},{"text":"impl Freeze for SpotPrice","synthetic":true,"types":[]},{"text":"impl Freeze for AvgPrice","synthetic":true,"types":[]},{"text":"impl Freeze for UFuturesBookTicker","synthetic":true,"types":[]},{"text":"impl Freeze for DFuturesBookTicker","synthetic":true,"types":[]},{"text":"impl Freeze for SpotBookTicker","synthetic":true,"types":[]},{"text":"impl Freeze for ForceOrder","synthetic":true,"types":[]},{"text":"impl Freeze for UOpenInterest","synthetic":true,"types":[]},{"text":"impl Freeze for DOpenInterest","synthetic":true,"types":[]},{"text":"impl Freeze for UOpenInterestHist","synthetic":true,"types":[]},{"text":"impl Freeze for DOpenInterestHist","synthetic":true,"types":[]},{"text":"impl Freeze for LongShortRatio","synthetic":true,"types":[]},{"text":"impl Freeze for TakerLongShortRatio","synthetic":true,"types":[]},{"text":"impl Freeze for TakerBuySellVol","synthetic":true,"types":[]},{"text":"impl Freeze for IndexInfo","synthetic":true,"types":[]},{"text":"impl Freeze for BaseAsset","synthetic":true,"types":[]},{"text":"impl Freeze for PositionSide","synthetic":true,"types":[]},{"text":"impl Freeze for FuturesOrder","synthetic":true,"types":[]},{"text":"impl Freeze for SpotOrderAck","synthetic":true,"types":[]},{"text":"impl Freeze for SpotOrderResult","synthetic":true,"types":[]},{"text":"impl Freeze for SpotOrderFull","synthetic":true,"types":[]},{"text":"impl Freeze for OrderFill","synthetic":true,"types":[]},{"text":"impl Freeze for SpotOrder","synthetic":true,"types":[]},{"text":"impl Freeze for SpotOpOrder","synthetic":true,"types":[]},{"text":"impl Freeze for BatchOrderResponse","synthetic":true,"types":[]},{"text":"impl Freeze for CountdownCancel","synthetic":true,"types":[]},{"text":"impl Freeze for AccountAsset","synthetic":true,"types":[]},{"text":"impl Freeze for AccountPosition","synthetic":true,"types":[]},{"text":"impl Freeze for SpotAccount","synthetic":true,"types":[]},{"text":"impl Freeze for SpotBalance","synthetic":true,"types":[]},{"text":"impl Freeze for FuturesAccount","synthetic":true,"types":[]},{"text":"impl Freeze for Leverage","synthetic":true,"types":[]},{"text":"impl Freeze for PositionMargin","synthetic":true,"types":[]},{"text":"impl Freeze for PositionMarginHist","synthetic":true,"types":[]},{"text":"impl Freeze for PositionRisk","synthetic":true,"types":[]},{"text":"impl Freeze for UserFuturesTrade","synthetic":true,"types":[]},{"text":"impl Freeze for UserSpotTrade","synthetic":true,"types":[]},{"text":"impl Freeze for ListenKey","synthetic":true,"types":[]},{"text":"impl&lt;R&gt; Freeze for MultiResponse&lt;R&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;R: Freeze,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Freeze for WSAggTrade","synthetic":true,"types":[]},{"text":"impl Freeze for WSPrice","synthetic":true,"types":[]},{"text":"impl Freeze for WSKline","synthetic":true,"types":[]},{"text":"impl Freeze for WSContinuousKline","synthetic":true,"types":[]},{"text":"impl Freeze for KData","synthetic":true,"types":[]},{"text":"impl Freeze for WSMiniTicker","synthetic":true,"types":[]},{"text":"impl Freeze for WSTicker","synthetic":true,"types":[]},{"text":"impl Freeze for WSBookTicker","synthetic":true,"types":[]},{"text":"impl Freeze for WSForceOrder","synthetic":true,"types":[]},{"text":"impl Freeze for OrderData","synthetic":true,"types":[]},{"text":"impl Freeze for WSDepth","synthetic":true,"types":[]},{"text":"impl Freeze for WSListenKeyExpired","synthetic":true,"types":[]},{"text":"impl Freeze for WSMarginPosition","synthetic":true,"types":[]},{"text":"impl Freeze for WSMarginCall","synthetic":true,"types":[]},{"text":"impl Freeze for WSAccountEvent","synthetic":true,"types":[]},{"text":"impl Freeze for WSBalance","synthetic":true,"types":[]},{"text":"impl Freeze for WSPosition","synthetic":true,"types":[]},{"text":"impl Freeze for WSAccountUpdate","synthetic":true,"types":[]},{"text":"impl Freeze for WSOrderUpdate","synthetic":true,"types":[]},{"text":"impl Freeze for WSOrderEvent","synthetic":true,"types":[]},{"text":"impl Freeze for WSLeverageUpdate","synthetic":true,"types":[]},{"text":"impl Freeze for WSLeverageEvent","synthetic":true,"types":[]},{"text":"impl Freeze for WSUserStream","synthetic":true,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()