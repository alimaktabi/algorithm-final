const DocumentPage = () => {
  return (
    <div className="mt-20 container mx-auto bg-slate-800 shadow rounded border leading-7 text-justify border-gray-600 p-5">
      <div className="p-4">
        <h1 className="text-3xl font-bold mb-4">
          Project Documentation: Orienteering Problem Solution
        </h1>

        <h2 className="text-xl font-bold mb-2">Introduction:</h2>
        <p className="mb-4">
          The Orienteering Problem (OP) is an optimization problem that involves
          finding the shortest route between a set of locations, known as
          control points, while visiting each location only once. The goal is to
          maximize the total score obtained by visiting these locations, as each
          location has a different score associated with it. The Orienteering
          Problem has various real-world applications in logistics,
          transportation planning, and recreational activities such as hiking
          and orienteering.
        </p>

        <h2 className="text-xl font-bold mb-2">Project Goal:</h2>
        <p className="mb-4">
          The goal of this project is to solve the Orienteering Problem (OP) by
          implementing three algorithms based on course topics. These algorithms
          will be used to find the optimal solution for a given set of control
          points. The project also includes the testing of the algorithms on
          standard instances provided.
        </p>

        <h2 className="text-xl font-bold mb-2">Algorithms Used:</h2>

        <h3 className="text-lg font-bold mb-2">PathGreedy Algorithm:</h3>
        <p className="mb-2">
          The PathGreedy algorithm follows a greedy approach to solve the OP. It
          starts from the initial node and iteratively selects the nearest
          unvisited node. The algorithm continues until all nodes are visited or
          the time limit is reached. The selected nodes are stored as visited
          nodes, and the total profit and total cost are calculated.
        </p>
        <p className="mb-4">
          Time Complexity: O(n), where n is the number of nodes.
        </p>

        <h3 className="text-lg font-bold mb-2">ScoreGreedy Algorithm:</h3>
        <p className="mb-2">
          The ScoreGreedy algorithm also follows a greedy approach to solve the
          OP. It starts from the initial node and iteratively selects the node
          with the maximum score. The algorithm continues until all nodes are
          visited or the time limit is reached. The selected nodes are stored as
          visited nodes, and the total profit and total cost are calculated.
        </p>
        <p className="mb-4">
          Time Complexity: O(n), where n is the number of nodes.
        </p>

        <h3 className="text-lg font-bold mb-2">MainAlgorithm:</h3>
        <p className="mb-2">
          The MainAlgorithm combines the results of the PathGreedy and
          ScoreGreedy algorithms to determine the radius (r) for the smart
          greedy approach. It initializes an empty array of visited nodes, total
          cost, and profit. The algorithm uses a while loop that terminates when
          the total cost exceeds the time limit or all nodes have been visited.
          Within the loop, it iterates over the nodes and selects the node with
          the maximum score and a feasible distance based on the current radius
          (r). The selected node is added to the visited nodes, and the total
          cost and profit are updated.
        </p>
        <p className="mb-4">
          Time Complexity: O(n^2), where n is the number of nodes.
        </p>

        <h3 className="text-lg font-bold mb-2">Time Complexity:</h3>
        <p className="mb-4">
          The overall time complexity of the solution is O(n^2), where n is the
          number of nodes. This time complexity arises from the MainAlgorithm,
          which has a nested loop iterating over the nodes. The PathGreedy and
          ScoreGreedy algorithms have a time complexity of O(n) each, as they
          iterate over the nodes once.
        </p>

        <h2 className="text-xl font-bold mb-2">Conclusion:</h2>
        <p className="mb-4">
          In this project, the Orienteering Problem is addressed by implementing
          three algorithms: PathGreedy, ScoreGreedy, and MainAlgorithm. The
          PathGreedy and ScoreGreedy algorithms follow a greedy approach to
          select nodes based on proximity and score, respectively. The
          MainAlgorithm combines the results of the two algorithms to determine
          the optimal radius for the smart greedy approach. The solution has an
          overall time complexity of O(n^2), where n is the number of nodes. The
          project documentation provides a comprehensive understanding of the
          implemented algorithms and their time complexity, facilitating
          effective communication and further development of the solution.
        </p>
      </div>
    </div>
  )
}

export default DocumentPage
