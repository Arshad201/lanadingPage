
import { SVGProps } from "react";

interface SvgLogoProps extends SVGProps<SVGSVGElement> {
  className?: string;
}
const SvgLogo = ({ className, ...rest }: SvgLogoProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={212}
      height={22}
      viewBox="0 0 295 32"
      className={className}
      {...rest}
    >
      <g fillRule="evenodd">
        <path d="m78.207 9.819-2.637 1.696.93.763-.003 10.035c-.004.894-.759 1.516-1.823 1.514-.005 0-.273.009-.454-.03l-.005-12.522-2.294-1.465-2.899 1.854.152.253s.518-.329.622-.397c0 0 1.03.927 1.033 1.81v10.476c-1.17.334-2.364 1.25-2.37 3.347-.001.979.854 2.238 2.437 2.443.84.126 3.242-.216 3.31-.228.33-.05.753-.113 1.956-.16 1.015-.042 1.667.372 1.995.72.074.078.159.153.259.251l.024-.022c.31-.306.581-.98.581-1.442 0-1.008-.434-1.736-1.21-2.16-.54-.296-1.232-.407-2.133-.407-.05 0-.296.01-.636.051-.418.05-.99.1-1.482.147-.744.072-1.508.167-2.013.228-.336.042-.557.073-.65.073-.395.003-.67-.13-.892-.341a.91.91 0 0 1-.29-.609c.082-.902 1.236-1.288 1.59-1.31.034-.001.318-.008.372.004.674.151 2.2.388 3.848.395.526 0 1.071-.116 1.622-.337a5.514 5.514 0 0 0 1.449-.872 3.69 3.69 0 0 0 .918-1.086c.26-.448.393-.912.392-1.45-.003-1.456-.002-8.76 0-10.131l-1.699-1.091m1.525 1.203.917-.577m22.855 11.757-.592.387-.497-.415V11.05l-1.963-1.282-3.575 2.301-.098-.21c-.467-1.254-1.215-1.692-1.545-1.992l-.02-.018-3.391 2.189.142.224s.39-.23.56-.348c.342.346.935 1.313.933 1.697v8.383l-.92.75 2.625 1.705 2.624-1.672-.915-.766-.006-9.273.888-.567s1.273 1.378 1.281 1.389l.002 8.633c-.004 1.027.849 1.754 1.44 2.244.002.001 3.176-2.038 3.176-2.038l-.149-.197m-1.278-11.018.917-.576M34.075 22.843l.918-.575m6.021.09s-.83.49-.955.573c0 0-1.86-1.313-1.884-1.326v-4.11l4.625-3.012-2.635-4.758-5.501 3.555v9.174c1.033.726 3.346 2.042 3.346 2.042l3.153-1.972-.149-.166zm-2.839-10.455 2.155 3.587-2.16 1.41.005-4.997zm65.972 11.022.914-.578m71.286-12.156s-2.367 1.536-2.775 1.78c-.106-.162-.446-1.328-1.698-2.197-.386.252-3.22 2.082-3.22 2.082l.128.198s.407-.256.48-.305l.224.153c.399.364.551.628.551.816v8.914l-.966.777 2.685 2.028s2.858-1.943 2.77-1.91l-1.04-.882V12.76l.592-.367 1.328 1.653s-.137.194-.211.289c-.214.279-.544.7-.538 1.279.002.217.259.73.657.73h.07c.264-.013.348-.057.557-.132l.108-.038-.112-.026a1.102 1.102 0 0 1-.437-.203c-.003-.003-.034-.02-.042-.03-.144-.13-.299-.364-.299-.54 0-.314.2-.707.59-1.167.652-.734 2.19-1.822 2.19-1.822l-1.592-2.195m116.867 1.808.917-.578m-10.146 11.385.917-.576" />
        <path d="M65.866 21.575c-1.752-1.215-3.778-2.107-5.675-2.617l-.052-.017 2.09-3.014c2.663.56 4.48 1.982 4.48 3.447 0 .653-.309 1.526-.818 2.169l-.025.032zm-4.857-9.851a42.487 42.487 0 0 1-1.829-.307c-.956-.191-5.72-1.556-5.72-3.596 0-2.316 3.08-2.316 4.559-2.316.326 0 3.795.293 5.431 2.474a702.17 702.17 0 0 1-2.44 3.745zm10.455-3.139.047-.038c.235-.218.453-.664.453-.931 0-.31-.118-.594-.33-.801-.206-.226-.526-.354-.948-.384a12.78 12.78 0 0 0-.256-.012c-1.036.01-2.152.64-3.33 1.745-1.035.97-1.425 1.69-2.078 2.686-.53.81-.784 1.193-.926 1.413-.2-.024-1.4-.208-2.476-.434.347-.544 1.369-2.279 2.528-3.901.843-1.179 1.863-2.246 2.374-2.854a.82.82 0 0 1 .25-.2c.07-.039.173-.089.208-.127.004-.045-.136-.179-.16-.197a.498.498 0 0 0-.167.052c-.08.037-.185.087-.332.087-.187 0-.38-.154-.73-.434-.879-.704-2.516-2.009-5.393-2.013-4.929-.008-7.838 4.053-7.802 6.74.023 1.676.354 3.515 1.218 4.29.882.788 2.367 1.365 4.963 1.96l.175.045-.417.447c-.683.563-1.174 1.103-2.455 1.134-.81 0-1.187-.268-1.477-.52l-.06.025c.067.132.243.426.471.697.292.343.56.522.8.534.04.01.379.094.927-.071.709-.214 1.474-.728 2.212-1.531l.285-.309.286-.308 1.854.32c.212.047.42.07.604.122l-.764 1.123c-.963 1.405-1.332 1.844-1.332 1.844s-.642-.09-.812-.122c-.528-.102-1.36-.153-2.51-.144-2.25-.02-5.36.785-7.235 2.59a5.44 5.44 0 0 0-.948 1.2 4.577 4.577 0 0 0-.66 2.383c0 1.094.745 2.371 2.848 2.371 2.816 0 5.264-2.57 6.557-3.952l.207-.222c.384-.408.56-.694.7-.84 1.49.4 3.908 1.375 6.025 2.718.43-.424 1.693-1.878 2.878-3.58.65-.935 2.147-3.107 2.2-4.773.053-1.596-1.492-3.513-4.348-4.082.092-.184.262-.466.69-1.106 1.174-1.758 2.234-3.587 4.466-3.587.4 0 1.23.088 1.68.896.014.019.022.03.04.051zm-16.716 16.02c-.543.448-1.09.827-1.625 1.127a7.09 7.09 0 0 1-1.666.653 4.97 4.97 0 0 1-1.16.152 3.9 3.9 0 0 1-.34-.017c-1.141-.108-1.852-.763-1.852-1.712 0-2.513 4.361-3.295 5.95-3.295l.335-.002c.728-.005 1.237.045 2.664.323l.3.077a18.956 18.956 0 0 1-2.076 2.222c-.18.164-.348.323-.53.472zM21.87 18.38l-.05-.008c-1.987 2.384-3.777 3.137-4.072 3.25L17.75 9.13h-.016c2.302-.099 3.888-1.376 3.888-3.466a2.961 2.961 0 0 0-.175-.927c-.647.791-1.754 1.024-2.426 1.024-1.656 0-3.437-.49-5.322-1.01-1.98-.546-4.028-1.11-6.023-1.11-2.906 0-6.299 1.316-6.299 5.024 0 1.337.948 3.832 3.23 4.979l.098.051s-.547 1.166-.547 2.188c0 3.576 2.31 9.04 8.816 9.04 1.565 0 3.006-.345 4.286-1.021a9.195 9.195 0 0 0 2.742-2.24c1.352-1.611 1.874-3.243 1.879-3.258l-.01-.024zm-10.702 3.024c.13-.077.266-.17.266-.17 2.164-1.378 3.214-2.658 3.214-3.916V8.79s1.082.286 2.586.328l.018 12.69c-2.365.795-4.983.234-6.084-.403zm.145-2.083c-.032.53-.21 1.107-.647 1.81l-.163-.1c-2.212-1.383-3.3-4.107-3.442-7.007-.103-2.113 1.033-4.848 2.687-6.596.19.055 1.105.28 1.555.477l.01 5.306v6.11zM9.241 7.291c-3.334 3.244-4.41 6.09-4.41 6.09l-.14-.065c-.96-.472-1.414-1.65-1.463-2.661-.115-2.442 1.68-3.534 4.079-3.548.744-.005 1.609.09 1.934.183zM193.43 9.683l-3.19 2.118.133.26s.438-.276.513-.326l.207.134c.4.365.53.606.53.794v10.038l1.71 1.729 3.262-1.715-.246-.337-.471.23-.807-.825s-.002-10.4 0-10.728a260.864 260.864 0 0 1-1.641-1.372m-1.867-3.555-.015-.011.015-.01 2.084-1.579 1.828 1.736-2.102 1.48-.009.006-1.801-1.622m-69.607 3.618-2.637 1.697.93.76-.001 10.038c-.005.893-.761 1.517-1.824 1.513-.004 0-.275.01-.455-.028l-.005-12.524-2.294-1.465-2.91 1.86.152.254s.529-.336.634-.405c0 0 1.03.93 1.032 1.81l.003 10.534c-1.169.332-2.367 1.193-2.371 3.29-.003.978.853 2.237 2.435 2.443.839.126 3.242-.217 3.31-.227.328-.05.754-.113 1.956-.161 1.015-.04 1.667.372 1.996.72.073.079.157.154.258.251l.025-.02c.31-.309.58-.982.58-1.443 0-1.009-.434-1.736-1.21-2.16-.54-.297-1.232-.408-2.133-.408-.05 0-.297.01-.635.051-.418.05-.99.098-1.483.147-.743.072-1.508.167-2.013.229-.336.04-.556.072-.65.073-.395.003-.724-.123-.948-.332a1.04 1.04 0 0 1-.304-.659c.08-.9 1.195-1.285 1.55-1.306.034-.002.447.014.503.024.72.129 2.18.404 3.827.41a4.283 4.283 0 0 0 1.621-.337 5.493 5.493 0 0 0 1.449-.87c.434-.363.67-.655.92-1.085a2.79 2.79 0 0 0 .391-1.454c-.002-1.452-.002-8.758 0-10.129-.115-.075-1.7-1.091-1.7-1.091m109.177 6.313c.181-.004.59.025.72.076a.547.547 0 0 1 .324.295c.033.084.046 3.204.046 3.204 0 .606-.08.852-.225 1.099 1.216-.592 2.625-1.798 3.035-2.566.5-.966.46-2.888.419-4.923-.048-2.318-.103-4.944.618-6.883-.89.56-1.442 1.03-2.118 1.708-.703.708-1.211 1.329-1.372 1.722-.481 1.163-.357 2.935-.36 3.31-3.725.387-4.417 2.045-4.354 3.466.003.066.05.302.09.492l.044.205c.756-.962 1.793-1.175 3.133-1.205m-3.145-10.002c.146 0 .788.138 2.22.453.783.171 1.752.385 1.874.394h.751c.804 0 2.48-.962 4.485-2.574l.35-.274c-.488.202-1.008.407-1.604.407-.842 0-1.846-.315-2.91-.648-1.13-.354-2.3-.72-3.326-.72-2.25 0-3.759 1.328-3.759 3.306 0 .46.189.984.508 1.4a1.705 1.705 0 0 1-.127-.55c0-.749.576-1.194 1.538-1.194m16.987-3.897c.502.226 1.182.647 1.564 1.389-1.114.787-2.565 1.813-3.018 2.111-.813-.969-1.962-2.21-2.798-2.263 0 0-.578-.01-.738.088-.226.137-.255.345-.25.517l.002 7.306 3.208-1.973 2.538 2.48v8.178c0 2.32-1.673 4.826-5 6.98 1.075.321 2.91.557 5.088.113-1.225 1.781-2.62 2.67-4.148 2.642-.21-.013-.608-.05-.94-.172-1.787-.653-3.032-.254-3.058-.274 1.531-1.23 2.645-2.417 3.405-3.628.77-1.228 1.16-2.724 1.194-4.018l-.003-8.061-2.288-1.609-.015.786c.01.06.017.053.016.148-.008 2.061.023 3.93-.477 4.896-.41.768-1.82 1.974-3.036 2.565.146-.246.226-.494.226-1.098l.004-10.404c0-.17.052-1.112.073-1.25.2-1.369.5-2.78 2.685-4.256 1.639-1.106 2.989-1.598 4.004-1.598.541 0 1.2.152 1.762.404M33.51 22.899l-.007.05c-.208.146-1.79 1.19-2.274 1.567-.6.406-1.094.903-1.47 1.473a3.366 3.366 0 0 0-.53 1.655.739.739 0 0 0 .217.573c.323.33.916.417 1.216.417.086 0 .254 0 .408-.009.215-.013.33-.028.485-.066l-.011.054c-.055.22-.25.432-.556.592a1.94 1.94 0 0 1-.85.225c-1.126 0-1.535-.95-1.535-1.588 0-.937 1.208-2.623 2.013-3.329 0 0-1.438-1.128-1.442-2.044v-8.97l-1.29-1.396-.877.56v9.332c.053.059.92.76.92.76L25.3 24.43l-2.636-1.698.93-.756-.003-14.548.003-.8c-.014-.77-.082-1.859-.338-2.137-.158-.17-.367-.29-.632-.452.233-.708.664-1 1.361-1 .165 0 .705.083 1.037.245.238-.527.787-1.372 1.85-1.372.198 0 .596.13.83.29-.764.807-.694 2.648-.694 3.712v6.138l3.557-2.29 2.058 1.306v10.064c0 .844.47 1.335.885 1.768m249.608-.704.135.205-3.22 2.027-2.538-1.696.836-.753V6.523l.005-.261c-.014-.77-.081-1.859-.34-2.138-.156-.169-.364-.289-.63-.451.233-.71.664-1 1.36-1 .167 0 .631.065.962.226.466-.387.865-1.096 1.926-1.096.198 0 .597.128.83.291-.467.492-.623 1.278-.672 2.056-.053 4.317-.032 17.868-.032 17.868l.704.614.674-.436M32.437 11.181l.917-.577m57.22 1.324.915-.576M81.32 22.719l.917-.578m41.266-11.208.916-.577m42.713 1.403.917-.578m-10.155 11.762.916-.577m36.064-11.23.917-.578m-4.854 12.559.917-.577m26.695-10.688.917-.576m55.468.114.918-.577m8.784-6.99c-.018.463-.004 3.493.004 4.243.672.612 2.218 2.022 2.9 2.636-.686.584-1.982 1.269-2.982 1.524-.035.006.123.297.123.63v9.52l2.957 2.147c2.79-1.75 4.777-2.19 5.742-2.376l.028-10.272-8.772-8.052zm3.684 7.569 1.75 1.616.001 9.462-2.036-1.384v-9.481l.285-.213zM165.145 9.67c-1.242.796-4.74 2.279-6.661 2.66-.035.007.123.298.123.632v9.52l2.956 2.146c2.792-1.749 4.777-2.19 5.742-2.375l.029-10.618-2.189-1.964zm-2.944 2.042 1.795 1.916v8.885l-2.035-1.384v-9.31l.24-.107zM81.966 3.767c-.017.463-.004 3.494.004 4.243.672.612 2.22 2.022 2.901 2.637-.687.583-1.982 1.268-2.981 1.521-.035.007.123.299.123.632v9.52l2.956 2.146c2.79-1.749 4.777-2.19 5.742-2.375l.029-10.272-8.774-8.052zm3.685 7.568 1.75 1.617v9.462l-2.034-1.385v-9.48l.284-.214zm189.754 11.32.917-.576m-101.962.401.68-.48m100.367.34c-.189-.235-.336-.564-.303-.798V11.283a544.925 544.925 0 0 0-1.723-1.567l-2.673 2.044-1.99-1.893-2.603 2 1.796 1.94c-.277.388-1.04 1.835-.157 2.997.184.24.244.336.244.336l-.252.097c-1.654.498-2.849 2.286-2.887 3.58 0 1.066.538 2.894 2.054 3.674l4.631-2.799.025.333c.053.752.511 1.57 1.292 2.513l2.76-1.902-.214-.296zm-3.91-1.324-2.194 1.326a3.173 3.173 0 0 1-1.46-1.43 4.353 4.353 0 0 1-.453-1.818s-.015-.687.293-1.06c.145-.175.329-.3.418-.354.139-.085.32-.1.433-.017.814.605 1.786.69 2.917.723l.045 2.63zm-.757-8.714.743.744-.005 4.718c-1.212.034-2.178-.215-2.654-.62-1.987-1.686-.254-3.942 1.916-4.842zm-80.93 9.92-.591.388s-.487-.407-.5-.416V11.069l-1.96-1.28-3.576 2.3-.098-.212c-.467-1.252-1.215-1.69-1.545-1.99l-.02-.018-3.392 2.188.143.225s.389-.23.559-.349c.343.348.935 1.313.933 1.697v8.384l-.92.75 2.625 1.704 2.625-1.671-.915-.767-.006-9.272.887-.566 1.282 1.387.002 8.634c-.005 1.027.849 1.755 1.44 2.244.003.002 3.175-2.037 3.175-2.037l-.148-.198m-1.295-11.012.916-.577m18.987 11.589-.592.388s-.484-.407-.498-.416V11.069l-1.961-1.28-3.576 2.3-.098-.212c-.468-1.252-1.216-1.69-1.545-1.99l-.019-.018-3.393 2.188.143.225s.39-.23.559-.349c.343.348.937 1.313.934 1.697v8.384l-.92.75 2.625 1.704 2.624-1.671-.915-.767-.006-9.272.887-.566 1.282 1.387.002 8.634c-.004 1.027.85 1.755 1.44 2.244.002.002 3.176-2.037 3.176-2.037l-.149-.198m-1.278-11.03.917-.576" />
        <path d="m111.218 22.351-.957.575s-1.852-1.308-1.877-1.321v-4.11l4.626-3.012-2.636-4.758-5.502 3.555v9.174c1.034.726 3.349 2.042 3.349 2.042l3.152-1.972-.155-.173zm-2.834-10.448 2.154 3.587-2.158 1.41.004-4.997zm138.332 11.02.918-.577m6.154.03-.955.575s-1.854-1.307-1.878-1.32v-4.11l4.625-3.013-2.635-4.758-5.502 3.555v9.175c1.035.725 3.348 2.042 3.348 2.042l3.152-1.974-.155-.172zm-2.833-10.448 2.154 3.588-2.159 1.41.005-4.998zm12.585-1.738s-2.368 1.535-2.775 1.78c-.107-.163-.447-1.329-1.697-2.198-.388.252-3.222 2.082-3.222 2.082l.13.2s.405-.257.48-.307l.222.153c.4.365.552.628.552.816v8.915l-.965.778 2.684 2.026s2.857-1.942 2.77-1.909l-1.04-.883v-8.884l.592-.368 1.328 1.654s-.137.193-.21.289c-.215.278-.545.7-.539 1.279.002.217.259.73.656.73l.071-.003c.264-.012.347-.054.557-.129l.109-.038-.113-.026c-.17-.04-.323-.11-.438-.203-.003-.003-.032-.02-.042-.03-.144-.13-.298-.365-.298-.54 0-.315.198-.707.59-1.168.652-.733 2.188-1.82 2.188-1.82l-1.59-2.196m-2.003 12.288.679-.478m-49.165-10.159 2.336 2.077v7.65l-.724.585-.059-.023c-.856-.318-1.909-1.741-1.909-2.537l-.002-7.582.358-.17zm5.675 8.883v-8.98s-1.689-1.48-2.363-2.122c-.565.415-3.985 1.93-7.249 2.864.107.115.323.362.323.362l-.026 5.579c-.02.93.009 2.09.35 3.098.376 1.105 1.065 1.94 2.11 2.555l.259.157-5.347 4.377c.045.033.073.575.086.575.11 0 .259-.068.45-.155a4.526 4.526 0 0 1 2.069-.464c1.457 0 3 .923 3.741 1.367.13.077.265.157.331.19.448-.102 2.161-1.367 3.674-2.704.862-.761 1.59-1.484 2.107-2.09.617-.724.93-1.276.93-1.638 0-.482-.333-.906-.686-1.354-.337-.428-.759-.964-.759-1.617zm-2.477 6.98-.424-.234c-1.07-.587-2.08-1.121-3.234-1.125-.064.008-.168 0-.304.014-.365.04-.963.125-1.489.237l-.198-.393s4.157-3.405 4.535-3.7c.546.405 1.235 1.259 1.546 1.752.328.516.436 1.04.436 1.616 0 .65-.16 1.056-.868 1.834zm18.611-7.063c-3.718.119-6.731 3.423-6.683 6.692.019 1.325.498 3.297 2.46 3.297.832 0 1.464-.356 1.464-1.454 0-.194-.034-.55-.167-.744-.133.355-.798 1.228-1.463 1.228-1.43-.032-1.83-1.164-1.83-2.1 0-2.004 1.53-4.332 4.024-4.332 1.397 0 2.761.581 4.124 2.069 0 0 2.944-2.106 2.923-2.131-1.686-2.076-2.679-2.593-4.852-2.525m-92.468-1.045c-.136.539-1.068 2.338-2.097 2.365-.873.022-1.22.02-1.964-.17a7.965 7.965 0 0 0-1.442-.256 8.479 8.479 0 0 0-.632-.03c-2.569 0-3.354 2.2-3.36 3.547-.008 2.36 1.131 4.88 4.225 4.848.931 0 2.959-.516 2.959-2.36 0-.064-.2-1.13-.732-1.13h-.397c.064.322.297.84.297 1.002 0 1.195-1.695 1.841-2.428 1.841-1.661 0-3.225-.969-3.225-2.973 0-1.1.565-2.252 1.896-2.252 1.163 0 2.578.696 3.71.678 2.58-.043 3.147-1.704 3.19-5.11m-7.233-11.099.05-.045c-.49-.386-.702-.86-.702-1.163 0-.84.73-1.728 2.08-1.728.248 0 .963.147 1.872.34.388.082.828.177.91.18 1.116.028 2.882-1.128 3.946-2.26l.054-.058h-.047c-.948.002-1.687-.284-2.401-.561-.734-.284-1.493-.58-2.457-.58-2.174 0-4.607 1.607-4.607 3.754 0 .38.448 1.7 1.302 2.121" />
        <path d="M157.38 22.004s-.336.266-.508.238a1.281 1.281 0 0 1-.344-.133c-.48-.298-.965-.92-.965-1.861V6.978c0-.811.338-1.3.518-1.562l-.007-.046c-.349-.27-.748-.6-1.193-.97-.8-.663-1.878-1.472-2.47-1.926 0 0-3.114 2.457-3.333 2.627l-1.439-1.125c-.585-.478-1.47-1.198-1.745-1.374-.454.243-6.933 5.612-6.933 5.612v4.47l-.174.023c-3.616.475-3.897 3.176-3.897 3.993 0 .101.11.523.204.854l.024.084.042-.078a3.224 3.224 0 0 1 2.412-1.71c1.163-.158 1.262-.07 1.322-.019l.067.059-.007 4.79c-.018.48-.096.706-.23.931 1.26-.61 2.718-1.86 3.144-2.656.519-1.001.485-.993.485-3.128v-.236h3.016v5.563l-1.05 1.06 3.572 2.312 3.331-2.39-.484-.257s-.132.094-.18.133a.547.547 0 0 1-.322.131c-.355 0-1.377-.868-1.463-1.09l-.012-5.477 3.277.001v5.226c-.006.37-.017.985.415 1.907.089.168 1.127 1.473 1.903 1.862.354-.18 3.37-2.362 3.37-2.362l-.346-.206zm-12.011-9.48h-3.016V6.476l1.264-1.031c.011.01 1.736 1.432 1.752 1.441v5.636zm6.764 0h-3.372V6.395l1.206-.935 2.166 1.985v5.077z" />
      </g>
    </svg>
  );
};
export default SvgLogo