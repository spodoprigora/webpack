module.exports = function(paths) {
    return {
        module: {
            rules: [
                {
                    test: /\.scss$/,
                    include: paths,
                    use: [
                        'style-loader', // добавляет стили в дом дерево
                        'css-loader', // добавляет css модули в граф зависимостей
                        'sass-loader' // компилирует scss в css
                    ]
                }
            ]

        }
    };
};