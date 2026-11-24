import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export function setupSwagger(app: INestApplication) {
  const config = new DocumentBuilder()
    .setTitle('Nest Js Course Api')
    .setDescription('Api documentation')
    .setContact(
      'Yurkelove Team',
      'https://yurkelove.com',
      'support@yurkelove-team.com',
    )
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('/docs', app, document, {
    jsonDocumentUrl: '/swagger.json',
    yamlDocumentUrl: '/swagger.yaml',
    customSiteTitle: 'Nest js Api docs',
  });
}
