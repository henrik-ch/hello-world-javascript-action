# shell.nix
with (import <nixpkgs> {});

mkShell {
  buildInputs = [
    nodejs
    jq
    visidata
    ripgrep
    nix-info
    curl
    # act
  ];
}
