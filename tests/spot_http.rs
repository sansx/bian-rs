use bian_rs::client::*;
use bian_rs::enums;
use bian_rs::params;

use std::env;
const BASE_URL: &str = "https://api.binance.com/";

fn init_client() -> SpotHttpClient {
    dotenv::dotenv().unwrap();
    let api_key = env::var("API_KEY").expect("can not find API_KEY env variable");
    let secret_key = env::var("SECRET_KEY").expect("can not find SECRET_KEY env variable");
    SpotHttpClient::new(&api_key, &secret_key, BASE_URL)
}

#[tokio::test]
async fn test_ping() {
    let client = init_client();
    client.ping().await.unwrap();
}

#[tokio::test]
async fn test_server_time() {
    let client = init_client();
    client.server_time().await.unwrap();
}
#[tokio::test]
async fn test_exchange_info() {
    let client = init_client();
    client.exchange_info().await.unwrap();
}

#[tokio::test]
async fn test_depth() {
    let client = init_client();
    let param = params::PDepth {
        symbol: "BTCUSDT".to_string(),
        limit: 500,
    };
    dbg!(client.depth(param).await.unwrap());
}

#[tokio::test]
async fn test_trades() {
    let client = init_client();
    let param = params::PTrade {
        symbol: "BTCUSDT".to_string(),
        limit: 500,
    };
    dbg!(client.trades(param).await.unwrap());
}

#[tokio::test]
async fn test_historical_trades() {
    let client = init_client();
    let trade_param = params::PTrade {
        symbol: "BTCUSDT".to_string(),
        limit: 10,
    };
    let trades = client.trades(trade_param).await.unwrap();
    let htrade_param = params::PHistoricalTrade {
        symbol: "BTCUSDT".to_string(),
        from_id: Some(trades.first().unwrap().id),
        limit: None,
    };
    dbg!(client.historical_trades(htrade_param).await.unwrap());
}

#[tokio::test]
async fn test_agg_trades() {
    let client = init_client();
    let param = params::PAggTrade {
        symbol: "BTCUSDT".to_string(),
        limit: None,
        from_id: None,
        start_time: None,
        end_time: None,
    };
    dbg!(client.agg_trades(param).await.unwrap());
}

#[tokio::test]
async fn test_klines() {
    let client = init_client();
    let param = params::PKline {
        symbol: "BTCUSDT".to_string(),
        interval: enums::Interval::Min1,
        start_time: None,
        end_time: None,
        limit: None,
    };
    dbg!(client.klines(param).await.unwrap());
}

#[tokio::test]
async fn test_h24_ticker() {
    let client = init_client();
    let param = params::PSymbol {
        symbol: "BTCUSDT".to_string(),
    };
    dbg!(client.h24_ticker(param).await.unwrap());
}

#[tokio::test]
async fn test_h24_tickers() {
    let client = init_client();
    dbg!(client.h24_tickers().await.unwrap());
}

#[tokio::test]
async fn test_avg_price() {
    let client = init_client();
    let param = params::PSymbol {
        symbol: "BTCUSDT".to_string(),
    };
    dbg!(client.avg_price(param).await.unwrap());
}

#[tokio::test]
async fn test_price() {
    let client = init_client();
    let param = params::PSymbol {
        symbol: "BTCUSDT".to_string(),
    };
    dbg!(client.price(param).await.unwrap());
}

#[tokio::test]
async fn test_prices() {
    let client = init_client();
    dbg!(client.prices().await.unwrap());
}

#[tokio::test]
async fn test_book_ticker() {
    let client = init_client();
    let param = params::PSymbol {
        symbol: "BTCUSDT".to_string(),
    };
    dbg!(client.book_ticker(param).await.unwrap());
}

#[tokio::test]
async fn test_book_tickers() {
    let client = init_client();
    dbg!(client.book_tickers().await.unwrap());
}

#[tokio::test]
async fn test_account() {
    let client = init_client();
    let param = params::PTimestamp::now();
    dbg!(client.account(param).await.unwrap());
}
