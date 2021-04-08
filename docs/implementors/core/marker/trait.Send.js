(function() {var implementors = {};
implementors["bian_rs"] = [{"text":"impl Send for DFuturesHttpClient","synthetic":true,"types":[]},{"text":"impl Send for DFuturesWSClient","synthetic":true,"types":[]},{"text":"impl Send for SpotHttpClient","synthetic":true,"types":[]},{"text":"impl Send for UFuturesHttpClient","synthetic":true,"types":[]},{"text":"impl Send for UFuturesWSClient","synthetic":true,"types":[]},{"text":"impl Send for ContractType","synthetic":true,"types":[]},{"text":"impl Send for ContractStatus","synthetic":true,"types":[]},{"text":"impl Send for OrderStatus","synthetic":true,"types":[]},{"text":"impl Send for FuturesOrderType","synthetic":true,"types":[]},{"text":"impl Send for SpotOrderType","synthetic":true,"types":[]},{"text":"impl Send for OrderSide","synthetic":true,"types":[]},{"text":"impl Send for PositionDirect","synthetic":true,"types":[]},{"text":"impl Send for TimeInForce","synthetic":true,"types":[]},{"text":"impl Send for WorkingType","synthetic":true,"types":[]},{"text":"impl Send for MarginType","synthetic":true,"types":[]},{"text":"impl Send for NewOrderType","synthetic":true,"types":[]},{"text":"impl Send for Interval","synthetic":true,"types":[]},{"text":"impl Send for RateLimitType","synthetic":true,"types":[]},{"text":"impl Send for Method","synthetic":true,"types":[]},{"text":"impl Send for APIError","synthetic":true,"types":[]},{"text":"impl Send for PDepth","synthetic":true,"types":[]},{"text":"impl Send for PTrade","synthetic":true,"types":[]},{"text":"impl Send for PHistoricalTrade","synthetic":true,"types":[]},{"text":"impl Send for PAggTrade","synthetic":true,"types":[]},{"text":"impl Send for PKline","synthetic":true,"types":[]},{"text":"impl Send for PContinuousKline","synthetic":true,"types":[]},{"text":"impl Send for PIndexPriceKline","synthetic":true,"types":[]},{"text":"impl Send for PSymbol","synthetic":true,"types":[]},{"text":"impl Send for PSymbolPair","synthetic":true,"types":[]},{"text":"impl Send for PFundingRate","synthetic":true,"types":[]},{"text":"impl Send for PForceOrder","synthetic":true,"types":[]},{"text":"impl Send for PUFutures","synthetic":true,"types":[]},{"text":"impl Send for PDFutures","synthetic":true,"types":[]},{"text":"impl Send for PTakerBullSell","synthetic":true,"types":[]},{"text":"impl Send for PLvtKlines","synthetic":true,"types":[]},{"text":"impl Send for PTimestamp","synthetic":true,"types":[]},{"text":"impl Send for PPositionSideDual","synthetic":true,"types":[]},{"text":"impl Send for PFuturesOrderSpec","synthetic":true,"types":[]},{"text":"impl Send for PFuturesOrder","synthetic":true,"types":[]},{"text":"impl Send for PSpotOrder","synthetic":true,"types":[]},{"text":"impl Send for PSpotOrderSpec","synthetic":true,"types":[]},{"text":"impl Send for PBatchOrder","synthetic":true,"types":[]},{"text":"impl Send for PQueryFuturesOrder","synthetic":true,"types":[]},{"text":"impl Send for PQuerySpotOrder","synthetic":true,"types":[]},{"text":"impl Send for PSymbolWithTs","synthetic":true,"types":[]},{"text":"impl Send for PBatchCancelOrder","synthetic":true,"types":[]},{"text":"impl Send for PCountdownCancel","synthetic":true,"types":[]},{"text":"impl Send for POptionSymbolQuery","synthetic":true,"types":[]},{"text":"impl Send for PHistOrder","synthetic":true,"types":[]},{"text":"impl Send for PLeverage","synthetic":true,"types":[]},{"text":"impl Send for PMarginType","synthetic":true,"types":[]},{"text":"impl Send for PPositionMargin","synthetic":true,"types":[]},{"text":"impl Send for PPositionMarginHist","synthetic":true,"types":[]},{"text":"impl Send for PUserTrade","synthetic":true,"types":[]},{"text":"impl Send for EmptyResponse","synthetic":true,"types":[]},{"text":"impl Send for UFuturesAccountBalance","synthetic":true,"types":[]},{"text":"impl Send for DFuturesAccountBalance","synthetic":true,"types":[]},{"text":"impl Send for ServerTime","synthetic":true,"types":[]},{"text":"impl Send for RateLimit","synthetic":true,"types":[]},{"text":"impl Send for FuturesSymbolFilter","synthetic":true,"types":[]},{"text":"impl Send for SpotSymbolFilter","synthetic":true,"types":[]},{"text":"impl Send for CodeResponse","synthetic":true,"types":[]},{"text":"impl Send for UFuturesSymbol","synthetic":true,"types":[]},{"text":"impl Send for DFuturesSymbol","synthetic":true,"types":[]},{"text":"impl Send for SpotSymbol","synthetic":true,"types":[]},{"text":"impl Send for UFuturesExchangeInfo","synthetic":true,"types":[]},{"text":"impl Send for DFuturesExchangeInfo","synthetic":true,"types":[]},{"text":"impl Send for SpotExchangeInfo","synthetic":true,"types":[]},{"text":"impl Send for FuturesDepth","synthetic":true,"types":[]},{"text":"impl Send for SpotDepth","synthetic":true,"types":[]},{"text":"impl Send for UFuturesTrade","synthetic":true,"types":[]},{"text":"impl Send for DFuturesTrade","synthetic":true,"types":[]},{"text":"impl Send for SpotTrade","synthetic":true,"types":[]},{"text":"impl Send for UFuturesHistoricalTrade","synthetic":true,"types":[]},{"text":"impl Send for DFuturesHistoricalTrade","synthetic":true,"types":[]},{"text":"impl Send for SpotHistoricalTrade","synthetic":true,"types":[]},{"text":"impl Send for AggTrade","synthetic":true,"types":[]},{"text":"impl Send for Kline","synthetic":true,"types":[]},{"text":"impl Send for UPremiumIndex","synthetic":true,"types":[]},{"text":"impl Send for DPremiumIndex","synthetic":true,"types":[]},{"text":"impl Send for FundingRate","synthetic":true,"types":[]},{"text":"impl Send for H24ticker","synthetic":true,"types":[]},{"text":"impl Send for DFuturesH24ticker","synthetic":true,"types":[]},{"text":"impl Send for FuturesPrice","synthetic":true,"types":[]},{"text":"impl Send for DFuturesPrice","synthetic":true,"types":[]},{"text":"impl Send for SpotPrice","synthetic":true,"types":[]},{"text":"impl Send for AvgPrice","synthetic":true,"types":[]},{"text":"impl Send for UFuturesBookTicker","synthetic":true,"types":[]},{"text":"impl Send for DFuturesBookTicker","synthetic":true,"types":[]},{"text":"impl Send for SpotBookTicker","synthetic":true,"types":[]},{"text":"impl Send for ForceOrder","synthetic":true,"types":[]},{"text":"impl Send for UOpenInterest","synthetic":true,"types":[]},{"text":"impl Send for DOpenInterest","synthetic":true,"types":[]},{"text":"impl Send for UOpenInterestHist","synthetic":true,"types":[]},{"text":"impl Send for DOpenInterestHist","synthetic":true,"types":[]},{"text":"impl Send for LongShortRatio","synthetic":true,"types":[]},{"text":"impl Send for TakerLongShortRatio","synthetic":true,"types":[]},{"text":"impl Send for TakerBuySellVol","synthetic":true,"types":[]},{"text":"impl Send for IndexInfo","synthetic":true,"types":[]},{"text":"impl Send for BaseAsset","synthetic":true,"types":[]},{"text":"impl Send for PositionSide","synthetic":true,"types":[]},{"text":"impl Send for FuturesOrder","synthetic":true,"types":[]},{"text":"impl Send for SpotOrderAck","synthetic":true,"types":[]},{"text":"impl Send for SpotOrderResult","synthetic":true,"types":[]},{"text":"impl Send for SpotOrderFull","synthetic":true,"types":[]},{"text":"impl Send for OrderFill","synthetic":true,"types":[]},{"text":"impl Send for SpotOrder","synthetic":true,"types":[]},{"text":"impl Send for SpotOpOrder","synthetic":true,"types":[]},{"text":"impl Send for BatchOrderResponse","synthetic":true,"types":[]},{"text":"impl Send for CountdownCancel","synthetic":true,"types":[]},{"text":"impl Send for AccountAsset","synthetic":true,"types":[]},{"text":"impl Send for AccountPosition","synthetic":true,"types":[]},{"text":"impl Send for SpotAccount","synthetic":true,"types":[]},{"text":"impl Send for SpotBalance","synthetic":true,"types":[]},{"text":"impl Send for FuturesAccount","synthetic":true,"types":[]},{"text":"impl Send for Leverage","synthetic":true,"types":[]},{"text":"impl Send for PositionMargin","synthetic":true,"types":[]},{"text":"impl Send for PositionMarginHist","synthetic":true,"types":[]},{"text":"impl Send for PositionRisk","synthetic":true,"types":[]},{"text":"impl Send for UserFuturesTrade","synthetic":true,"types":[]},{"text":"impl Send for UserSpotTrade","synthetic":true,"types":[]},{"text":"impl Send for ListenKey","synthetic":true,"types":[]},{"text":"impl&lt;R&gt; Send for MultiResponse&lt;R&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;R: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Send for WSAggTrade","synthetic":true,"types":[]},{"text":"impl Send for WSPrice","synthetic":true,"types":[]},{"text":"impl Send for WSKline","synthetic":true,"types":[]},{"text":"impl Send for WSContinuousKline","synthetic":true,"types":[]},{"text":"impl Send for KData","synthetic":true,"types":[]},{"text":"impl Send for WSMiniTicker","synthetic":true,"types":[]},{"text":"impl Send for WSTicker","synthetic":true,"types":[]},{"text":"impl Send for WSBookTicker","synthetic":true,"types":[]},{"text":"impl Send for WSForceOrder","synthetic":true,"types":[]},{"text":"impl Send for OrderData","synthetic":true,"types":[]},{"text":"impl Send for WSDepth","synthetic":true,"types":[]},{"text":"impl Send for WSListenKeyExpired","synthetic":true,"types":[]},{"text":"impl Send for WSMarginPosition","synthetic":true,"types":[]},{"text":"impl Send for WSMarginCall","synthetic":true,"types":[]},{"text":"impl Send for WSAccountEvent","synthetic":true,"types":[]},{"text":"impl Send for WSBalance","synthetic":true,"types":[]},{"text":"impl Send for WSPosition","synthetic":true,"types":[]},{"text":"impl Send for WSAccountUpdate","synthetic":true,"types":[]},{"text":"impl Send for WSOrderUpdate","synthetic":true,"types":[]},{"text":"impl Send for WSOrderEvent","synthetic":true,"types":[]},{"text":"impl Send for WSLeverageUpdate","synthetic":true,"types":[]},{"text":"impl Send for WSLeverageEvent","synthetic":true,"types":[]},{"text":"impl Send for WSUserStream","synthetic":true,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()