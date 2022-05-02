import 'dotenv/config';
import express from 'express';
import helmet from 'helmet';
import cors from 'cors';

import logger from '~/shared/utils/logger';
import attachRoutes from '~/app/routes';

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(helmet());
app.use(cors());

async function main() {
  // await connectDb()

  attachRoutes(app);

  app.listen(PORT, () => {
    logger.info(`Express is listening on PORT: ${PORT}`);
  });
}

void main();
