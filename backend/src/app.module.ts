import { Module } from '@nestjs/common';
import { RecipesModule } from './modules/recipes/recipe.module';

@Module({
  imports: [RecipesModule],
})
export class AppModule {}
