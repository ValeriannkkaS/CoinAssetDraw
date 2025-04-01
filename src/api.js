import { chartData, cryptoAssets, cryptoData } from './data';

export function fakeFetchCrypto() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(cryptoData);
        }, 1);
    });
}
export function fakeFetchAssets() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(cryptoAssets);
        }, 1);
    });
}
export function fakeFetchChartsData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(chartData);
        }, 1000);
    });
}
