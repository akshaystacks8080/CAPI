import { Schema, model, connect } from 'mongoose';

interface Exchange {
    exchange_id: string;
    website: string;
    name: string;
    data_start: string;
    data_end: string;
    data_symbols_count: string;
    volume_1hrs_usd: string;
    volume_1day_usd: string;
    volume_1mth_usd: string;
}

interface Assets {
    asset_id: string;
    name: string;
    type_is_crypto: string;
    data_quote_start: string;
    data_quote_end: string;
    data_orderbook_start: string;
    data_orderbook_end: string;
    data_trade_start: string;
    data_trade_en: string;
    data_symbols_count: number;
    volume_1hrs_usd: number;
    volume_1day_usd: number;
    volume_1mth_usd: number;
    id_icon: string;
    data_start: string;
    data_end: string;
}

const assSchema = new Schema<Assets>({
    asset_id: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    type_is_crypto: {
        type: String,
        required: true,
    },
    data_quote_start: {
        type: String,
    },
    data_quote_end: {
        type: String,
    },
    data_orderbook_start: {
        type: String,
    },
    data_orderbook_end: {
        type: String,
    },
    data_trade_start: {
        type: String,
    },
    data_trade_en: {
        type: String,
    },
    data_symbols_count: {
        type: Number,
    },
    volume_1hrs_usd: {
        type: Number,
    },
    volume_1day_usd: {
        type: Number,
    },
    volume_1mth_usd: {
        type: Number,
    },
    id_icon: {
        type: String,
    },
    data_start: {
        type: String,
    },
    data_end: {
        type: String,
    },
});

const excSchema = new Schema<Exchange>({
    exchange_id: {
        type: String,
        required: true,
    },
    website: {
        type: String,
    },
    name: {
        type: String,
        required: true,
    },
    data_start: {
        type: String,
    },
    data_end: {
        type: String,
    },
    data_symbols_count: {
        type: String,
    },
    volume_1hrs_usd: {
        type: String,
    },
    volume_1day_usd: {
        type: String,
    },
    volume_1mth_usd: {
        type: String,
    },
});

const exchangeModel = model<Exchange>('exchanges', excSchema);
const assetModel = model<Assets>('assets', assSchema);

export { exchangeModel, assetModel };
