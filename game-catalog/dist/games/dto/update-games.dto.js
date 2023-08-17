"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateGamesDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_games_dto_1 = require("./create-games.dto");
class UpdateGamesDto extends (0, mapped_types_1.PartialType)(create_games_dto_1.CreateGamesDto) {
}
exports.UpdateGamesDto = UpdateGamesDto;
//# sourceMappingURL=update-games.dto.js.map