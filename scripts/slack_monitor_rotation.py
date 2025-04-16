def get_rotation_state():
    """Get current rotation state from file or initialize if not exists."""
    try:
        if os.path.exists(ROTATION_FILE):
            with open(ROTATION_FILE, "r") as f:
                return json.load(f)
    except:
        pass
    # Default state if file doesn't exist or can't be read
    return {"last_index": -1, "last_user": None}

def save_rotation_state(state):
    """Save rotation state to file."""
    with open(ROTATION_FILE, "w") as f:
        json.dump(state, f)
    # Add git commands to commit changes
    os.system('git config --global user.name "GitHub Actions Bot"')
    os.system('git config --global user.email "actions@github.com"')
    os.system('git add rotation_state.json')
    os.system('git commit -m "Update rotation state [skip ci]"')
    os.system(f'git push https://{os.environ.get("GITHUB_TOKEN")}@github.com/{os.environ.get("GITHUB_REPOSITORY")}.git HEAD:main')
