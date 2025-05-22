"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenvFlow = require('dotenv-flow');
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const bodyParser = require("body-parser");
const app_module_1 = require("./app.module");
async function bootstrap() {
    var _a;
    dotenvFlow.config();
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
    }));
    app.enableShutdownHooks();
    app.enableCors({
        origin: true,
        credentials: true,
    });
    app.use(bodyParser.json({ limit: '50mb' }));
    app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
    await app.listen((_a = process.env['PORT']) !== null && _a !== void 0 ? _a : 8080);
}
bootstrap();
//# sourceMappingURL=main.js.map