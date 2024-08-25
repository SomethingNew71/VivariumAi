<template>
  <div class="navbar bg-base-100 py-5">
    <div class="navbar-start">
      <a class="btn btn-ghost text-4xl jaro-logo text-primary">VivariumAI</a>
    </div>
    <div class="navbar-end">
      <div class="hidden md:flex">
        <a
          class="btn btn-ghost"
          target="_blank"
          href="https://github.com/SomethingNew71/VivariumAi"
        >
          <i class="fa-xl fa-brands fa-github-alt"></i>
          Source
        </a>
        <a
          class="btn btn-ghost"
          target="_blank"
          href="https://langchain-ai.github.io/langgraph/"
        >
          <i class="fa-xl fa-duotone fa-solid fa-feather"></i>LangGraph
        </a>
      </div>

      <div class="dropdown dropdown-end md:hidden">
        <div tabindex="0" role="button" class="btn btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-7 w-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </div>
        <ul
          tabindex="0"
          class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
        >
          <li>
            <a
              class="btn btn-ghost"
              target="_blank"
              href="https://github.com/SomethingNew71/VivariumAi"
            >
              <i class="fa-xl fa-brands fa-github-alt"></i>
              Source
            </a>
          </li>
          <li>
            <a
              class="btn btn-ghost"
              target="_blank"
              href="https://langchain-ai.github.io/langgraph/"
            >
              <i class="fa-xl fa-duotone fa-solid fa-feather"></i>LangGraph
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
