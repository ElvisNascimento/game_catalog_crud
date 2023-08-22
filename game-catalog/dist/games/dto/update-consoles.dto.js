"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateConsolesDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_console_dto_1 = require("./create-console.dto");
class UpdateConsolesDto extends (0, mapped_types_1.PartialType)(create_console_dto_1.CreateConsoleDto) {
}
exports.UpdateConsolesDto = UpdateConsolesDto;
//# sourceMappingURL=update-consoles.dto.js.map