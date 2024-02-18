import jwt, { Secret, GetPublicKeyOrSecret } from 'jsonwebtoken';

export async function decodeToken(token: string) {
   const secretKey = process.env.SECRET_KEY;
   if (!secretKey) {
      console.error({ status: 401, message: 'Invalid secret key' });
      throw new Error('Invalid secret key');
   }

   try {
      const decodedToken = jwt.verify(
         token,
         secretKey as Secret | GetPublicKeyOrSecret
      );
      return decodedToken;
   } catch (error) {
      console.error(error);
      throw new Error('Token verification failed');
   }
}
