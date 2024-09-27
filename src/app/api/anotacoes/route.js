import { connectToDatabase } from "../../lib/db";

export const POST = async (req) => {
  try {
    const data = await req.json();
    const { user } = data;

    const db = await connectToDatabase();
    const [anotacoes] = await db.execute(
      "SELECT * FROM anotacoes WHERE usuario_id = ?",
      [user]
    );

    return new Response(JSON.stringify({ anotacoes }), {
      status: 200,
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ message: "Erro ao buscar anotações", error }),
      {
        status: 500,
      }
    );
  }
};
