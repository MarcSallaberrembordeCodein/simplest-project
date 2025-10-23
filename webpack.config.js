const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    // Point d'entrée
    entry: './assets/js/main.js',
    
    // Sortie
    output: {
        filename: 'js/[name].js',
        path: path.resolve(__dirname, 'public'),
        clean: true, // Nettoie le dossier public à chaque build
    },
    
    // Mode de développement
    mode: 'development',
    
    // Source maps pour le debugging
    devtool: 'inline-source-map',
    
    // Configuration du serveur de développement
    devServer: {
        static: './public',
        open: true,
        hot: true,
        port: 8080,
    },
    
    // Configuration des modules/loaders
    module: {
        rules: [
            // Gestion des fichiers CSS
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
            // Gestion des images
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'images/[hash][ext][query]'
                }
            },
            // Gestion des fonts
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'fonts/[hash][ext][query]'
                }
            },
            // Hack du sideEffects définit dans le package.json dans le design-system de Propulsion pour pouvoir utiliser le css
            {
                test: /node_modules\/@bpifrance\/design-system\/.*\.css$/,
                sideEffects: true,
            },
            // Hack du sideEffects définit dans le package.json dans le design-system de Propulsion pour pouvoir utiliser le js
            {
                test: /node_modules\/@bpifrance\/design-system\/.*\.js$/,
                sideEffects: true,
            }
        ],
    },
    
    // Plugins
    plugins: [
        // Plugin pour générer le fichier HTML
        new HtmlWebpackPlugin({
            template: './assets/index.html',
            filename: 'index.html',
            inject: 'body',
        }),
        
        // Plugin pour extraire le CSS dans un fichier séparé
        new MiniCssExtractPlugin({
            filename: 'css/[name].css',
        }),
    ],
    
    // Optimisation
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
    },
};